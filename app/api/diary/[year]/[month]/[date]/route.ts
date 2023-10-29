"use server";

import { NextRequest, NextResponse } from "next/server";
import { DateParams } from "@/types/params";
import { PostDiary } from "@/types/request";
import getAccess from "@/utils/getAccess";
import paramsToObject from "@/utils/paramsToObject";
import reqData from "@/utils/reqData";

export async function POST(
  req: NextRequest,
  { params: { year, month, date } }: DateParams
) {
  const path = `/diary/${year}/${month}/${date}`;
  const diary = paramsToObject<PostDiary>(await req.text());
  await reqData<PostDiary, boolean>(path)(await getAccess())("POST")(diary);
  return NextResponse.redirect(
    req.nextUrl.href.replace("/api", ""), //
    { status: 303 }
  );
}
