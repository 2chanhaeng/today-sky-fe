"use server";

import requestData from "@/utils/requestData";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string, _: FormData) {
  try {
    console.log(id);
    await requestData<null, null>("DELETE")(`/todo/${id}`);
    revalidatePath("/");
  } catch (e) {
    console.error(e);
  }
}

export async function checkTodo(
  { id, checked }: { id: string; checked: boolean },
  _: FormData
) {
  try {
    console.log(id, checked, !checked, JSON.stringify({ checked: !checked }));
    await requestData<{ checked: boolean }, null>("PATCH")(`/todo/${id}`, {
      checked: !checked,
    });
    revalidatePath("/");
  } catch (e) {
    console.error(e);
  }
}
