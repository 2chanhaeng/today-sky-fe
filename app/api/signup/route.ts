import { NextRequest, NextResponse } from "next/server";
import { Userinfo } from "@/types/login";
import reqData from "@/utils/reqData";
import paramsToObject from "@/utils/paramsToObject";

export async function POST(req: NextRequest) {
  const path = "/signup";
  const unpw = paramsToObject<Userinfo>(await req.text());
  const res = await reqData<Userinfo, boolean>(path)("")("POST")(unpw);
  const { origin } = req.nextUrl;
  if (!res) return NextResponse.redirect(`${origin}/signup`, { status: 303 });
  return NextResponse.redirect(`${origin}/login`, { status: 303 });
}
