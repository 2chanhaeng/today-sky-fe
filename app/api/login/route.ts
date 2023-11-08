import { NextRequest, NextResponse } from "next/server";
import getAccess from "@/utils/getAccess";

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
