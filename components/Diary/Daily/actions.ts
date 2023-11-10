"use server";

import { Diary } from "@/types/response";
import requestData from "@/utils/requestData";

export async function getDiary(path: string): Promise<Diary> {
  const res = await requestData<null, Diary>("GET")(path, null, [path]);
  if (!res) return { content: "" };
  return res;
}
