import config from "@/config/index.mjs";
import { ReqRes } from "@/types/generic";

export default function reqData<Req, Res>(
  path: string
): (access: string) => (method: string) => ReqRes<Req, Res> {
  return (access: string) => (method: string) => async (data?: Req) => {
    try {
      const body = JSON.stringify(data);
      console.log(`request ${method} to ${path} with ${body}`);
      const url = new URL(path, config.api);
      const headers: any = {};
      if (access) {
        headers["Authorization"] = `Bearer ${access}`;
      }
      if (body) {
        headers["Content-Type"] = "application/json";
      }
      const res = await fetch(url, { method, headers, body });
      console.log(`response ${res.status} from ${path}`);
      if (!res.ok) tryGetErrorMessage(res);
      return (await res.json()) as Res;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };
}
async function tryGetErrorMessage(res: Response) {
  try {
    const { message } = await res.json();
    throw new Error(`요청 실패(${res.status}): ${message}`);
  } catch (e) {
    throw new Error(`요청 실패(${res.status}): ${await res.text()}`);
  }
}
