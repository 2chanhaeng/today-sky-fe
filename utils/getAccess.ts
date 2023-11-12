import { cookies } from "next/headers";
import "dotenv/config";

/**
 * Get access token from cookie.
 * If access token is not exist, request access token with refresh token.
 * If refresh token is not exist or catch error, return empty string.
 * @returns {Promise<string>}
 */
export default async function getAccess(): Promise<string> {
  // 쿠키에 access가 존재하면 access를 반환
  const access = cookies().get("access")?.value;
  if (access) {
    return access;
  }
  // 없으면 refresh를 이용해 access를 요청
  const refresh = cookies().get("refresh")?.value;
  if (!refresh) {
    // refresh도 없으면 빈 문자열 반환
    return "";
  }
  try {
    // refresh로 access를 요청
    const access = await requestAccess(refresh);
    // access를 쿠키에 저장한 뒤 반환
    setAccess(access);
    return access;
  } catch (e) {
    // 에러 시 빈 문자열 반환
    console.log(e);
    return "";
  }
}

async function requestAccess(refresh: string) {
  const url = new URL("/refresh", process.env.API);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh }),
  });
  const { access } = await res.json();
  return access;
}

function setAccess(access: string) {
  cookies().set("access", access, {
    httpOnly: true,
    path: "/",
    secure: true,
    maxAge: 60,
  });
}
