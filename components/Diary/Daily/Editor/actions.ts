"use server";

import { revalidatePath } from "next/cache";
import { PostDiary } from "@/types/request";
import { Diary } from "@/types/response";
import formToObj from "@/utils/formToJson";
import requestData from "@/utils/requestData";

export async function postDiary(path: string, formData: FormData) {
  try {
    const diary = formToObj<PostDiary>(formData);
    console.log(path, diary.content);
    const res = await requestData<PostDiary, Diary>("POST")(path, diary);
    if (!res) throw new Error("No data");
    revalidatePath(path);
  } catch (e) {
    console.error(e);
  }
}
