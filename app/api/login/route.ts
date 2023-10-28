import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Tokens, Userinfo } from "@/types/login";
import reqData from "@/utils/reqData";
import paramsToObject from "@/utils/paramsToObject";

export async function POST(req: NextRequest) {
  const unpw = paramsToObject<Userinfo>(await req.text());
  const { access, refresh } = await requestLogin(unpw);
  setTokens(access, refresh);
  const { origin } = req.nextUrl;
  return NextResponse.redirect(`${origin}/home`, { status: 303 });
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

function setTokens(access: string, refresh: string) {
  cookies()
    .set("access", access, {
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: 60 * 60 * 7,
    })
    .set("refresh", refresh, {
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });
}
