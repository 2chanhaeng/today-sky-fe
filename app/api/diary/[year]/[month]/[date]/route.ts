"use server";

import { NextRequest, NextResponse } from "next/server";
import { DateParams } from "@/types/params";
import { PostDiary } from "@/types/request";
import { Diary } from "@/types/response";
import getPathByDate from "@/utils/getPathByDate";
import getAccess from "@/utils/getAccess";
import paramsToObject from "@/utils/paramsToObject";
import reqData from "@/utils/reqData";

const getPath = getPathByDate("diary");

export async function POST(req: NextRequest, params: DateParams) {
  const path = getPath(params);
  const diary = paramsToObject<PostDiary>(await req.text());
  await reqData<PostDiary, boolean>(path)(await getAccess())("POST")(diary);
  return NextResponse.redirect(
    req.nextUrl.href.replace("/api", ""), //
    { status: 303 }
  );
}

export async function GET(req: NextRequest, params: DateParams) {
  const path = getPath(params);
  const diary = await reqData<null, Diary>(path)(await getAccess())("GET")();
  return diary;
}
