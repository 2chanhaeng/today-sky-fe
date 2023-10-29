"use server";

import { NextRequest } from "next/server";
import { DateParams } from "@/types/params";
import { Diary } from "@/types/response";
import getPathByDate from "@/utils/getPathByDate";
import getAccess from "@/utils/getAccess";
import reqData from "@/utils/reqData";

const getPath = getPathByDate("diary");

export async function GET(req: NextRequest, params: DateParams) {
  const path = getPath(params);
  const access = await getAccess();
  const diaries = await reqData<null, Diary[]>(path)(access)("GET")();
  return diaries ?? [];
}
