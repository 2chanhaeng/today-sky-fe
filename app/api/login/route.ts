import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Tokens, Userinfo } from "@/types/login";
import reqData from "@/utils/reqData";
import paramsToObject from "@/utils/paramsToObject";
import getAccess from "@/utils/getAccess";

export async function POST(req: NextRequest) {
  const unpw = paramsToObject<Userinfo>(await req.text());
  const tokens = await requestLogin(unpw);
  setTokens(tokens);
  const { origin, searchParams } = req.nextUrl;
  const path = searchParams.get("redirect") || "/home";
  return NextResponse.redirect(`${origin}${path}`, { status: 303 });
}

async function requestLogin({
  username,
  password,
}: {
  username?: string;
  password?: string;
}): Promise<Tokens> {
  if (!username || !password) {
    throw new Error("로그인 실패: username, password를 입력해주세요");
  }
  try {
    const userinfo = { username, password };
    const path = "/login";
    const tokens = await reqData<Userinfo, Tokens>(path)("")("POST")(userinfo);
    console.log(`tokens: ${JSON.stringify(tokens)}`);
    if (!tokens) throw new Error("로그인 실패");
    return tokens;
  } catch (e) {
    console.log(e);
    return {
      access: "",
      refresh: "",
    };
  }
}

function setTokens({ access, refresh }: { access: string; refresh: string }) {
  if (access)
    cookies().set("access", access, {
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: 60 * 60,
    });
  if (refresh)
    cookies().set("refresh", refresh, {
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });
}

export async function GET(req: NextRequest) {
  const { origin, searchParams } = req.nextUrl;
  const redirectTo = searchParams.get("redirect") || "/home";
  const reloginTo = `/login?redirect=${redirectTo}`;
  const access = await getAccess();
  const redirect = access ? redirectTo : reloginTo;
  return NextResponse.redirect(
    `${origin}${redirect}`,
    { status: 303 } //
  );
}
