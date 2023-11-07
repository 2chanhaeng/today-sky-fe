"use server";

import { redirect as redirectTo } from "next/navigation";
import { cookies } from "next/headers";
import { Tokens, LoginInputs, LoginOptions } from "@/types/login";
import formToObj from "@/utils/formToJson";
import requestData from "@/utils/requestData";

export async function login({ redirect }: LoginOptions, formData: FormData) {
  let path = `/login?error=fail`;
  if (redirect) path += `&redirect=${redirect}`;
  console.log("login", path);
  try {
    const userinfo = formToObj<LoginInputs>(formData);
    if (userinfo.keep) userinfo.keep = true;
    const tokens = await requestLogin(userinfo);
    if (!tokens || !tokens.access || !tokens.refresh)
      throw new Error("로그인 실패");
    setTokens(tokens, userinfo);
    path = redirect || "/home";
  } catch (e) {
    console.log(e);
  }
  console.log(path);
  return redirectTo(path);
}

async function requestLogin(userinfo: LoginInputs): Promise<Tokens> {
  const { username, password } = userinfo;
  if (!username || !password) {
    throw new Error("로그인 실패: username, password를 입력해주세요");
  }
  try {
    const path = "/login";
    const tokens = await requestData<LoginInputs, Tokens>("POST")(
      path,
      userinfo
    );
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

function setTokens(
  { access, refresh }: Tokens,
  { keep = false }: { keep?: boolean }
) {
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
      maxAge: keep ? 60 * 60 * 24 * 30 : 0,
    });
}
