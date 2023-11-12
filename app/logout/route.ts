import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import reqData from "@/utils/reqData";
import getAccess from "@/utils/getAccess";

export async function GET({ nextUrl: { origin } }: NextRequest) {
  await reqData<null, null>("/logout")(await getAccess())("GET")();
  cookies().delete("access");
  cookies().delete("refresh");
  return NextResponse.redirect(`${origin}`, { status: 303 });
}
