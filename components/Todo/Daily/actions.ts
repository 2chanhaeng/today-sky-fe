"use server";

import { revalidatePath } from "next/cache";
import { PostTodo } from "@/types/request";
import formToObj from "@/utils/formToJson";
import requestData from "@/utils/requestData";
import { Todo } from "@/types/response";

export async function getTodos(path: string): Promise<Todo[]> {
  try {
    const data = await requestData<null, Todo[]>("GET")(path);
    return data ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function postTodo(path: string, formData: FormData) {
  try {
    const { content } = formToObj<PostTodo>(formData);
    const todo = await requestData<PostTodo, Todo>("POST")(path, { content });
    if (!todo) throw new Error("No data");
    revalidatePath("/");
  } catch (e) {
    console.error(e);
  }
}
