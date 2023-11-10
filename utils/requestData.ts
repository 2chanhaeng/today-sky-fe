import config from "@/config/index.mjs";
import { Maybe } from "@/types/generic";
import { cookies } from "next/headers";

export default function requestData<Req, Res>(
  method: string
): (path: string, data?: Req, tags?: string[]) => Promise<Maybe<Res>> {
  return async (path: string, data?: Req, tags?: string[]) => {
    "use server";
    try {
      const body = data ? JSON.stringify(data) : "";
      console.log(`request ${method} to ${path} with ${body}`);
      const url = new URL(path, config.api);
      const headers: any = {};
      const access = cookies().get("access")?.value;
      if (access) {
        headers["Authorization"] = `Bearer ${access}`;
      }
      const init: RequestInit = tags
        ? {
            method,
            headers,
            next: { tags },
          }
        : {
            method,
            headers,
            cache: "no-cache",
          };
      if (body) {
        init.body = body;
        console.log("body: " + body);
        headers["Content-Type"] = "application/json";
      }
      console.log("init: ", JSON.stringify(init, null, 2));
      const res = await fetch(url, init);
      console.log(`response ${res.status} from ${path}`);
      if (!res.ok) tryGetErrorMessage(res);
      try {
        return (await res.json()) as Res;
      } catch (e) {
        return true as any;
      }
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };
}

async function tryGetErrorMessage(res: Response) {
  try {
    if (res.status === 401) {
      throw new Error(`
      요청 실패(${res.status}): 로그인이 필요합니다.
      `);
    }
    const { message } = await res.clone().json();
    throw new Error(`요청 실패(${res.status}): ${message}`);
  } catch (e) {
    try {
      throw new Error(`요청 실패(${res.status}): ${await res.clone().text()}`);
    } catch (e) {
      throw new Error(`요청 실패(${res.status})`);
    }
  }
}
