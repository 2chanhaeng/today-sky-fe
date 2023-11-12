import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import requestData from "@/utils/requestData";

export async function GET({ nextUrl: { origin } }: NextRequest) {
  await requestData<null, null>("GET")("/logout");
  cookies().delete("access");
  cookies().delete("refresh");
  return NextResponse.redirect(`${origin}`, { status: 303 });
}
