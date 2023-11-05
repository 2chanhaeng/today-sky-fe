import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Dates } from "@/types/params";
import { Todo } from "@/types/response";
import { PostTodo } from "@/types/request";
import formToObj from "@/utils/formToJson";
import getPathByDate from "@/utils/getPathByDate";
import requestData from "@/utils/requestData";
import Item from "../Item";
import style from "./style.module.scss";

/**
 * ```
 * ┌─────────┬────────────────────────────┐
 * │  date   │          new todo          │
 * ├─────────┼────────────────────────────┤
 * │         │           content          │
 * │ checked ├────────────────────────────┤
 * │         │           comment          │
 * ├─────────┼────────────────────────────┤
 * │         │           content          │
 * │ checked ├────────────────────────────┤
 * │         │           comment          │
 * └─────────┴────────────────────────────┘
 * ```
 */
export default async function DailyTodos(params: Dates) {
  "use server";

  const path = getPathByDate("todo")({ params });
  if (!cookies().has("access")) redirect(`/api/login?redirect=${path}`);
  const { date } = params;
  const todos: Todo[] = await getTodos(path);
  const post = postTodo.bind(null, path);
  return (
    <section id="todos">
      <h2 className={style.date}>{date}일</h2>
      <form className={style.newTodo} action={post}>
        <input type="text" placeholder="할 일" name="content" required />
        <input type="submit" value="추가" />
      </form>
      <ul className={style.todos}>
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}

async function getTodos(path: string): Promise<Todo[]> {
  "use server";
  try {
    const data = await requestData<null, Todo[]>("GET")(path);
    return data ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function postTodo(path: string, formData: FormData) {
  "use server";
  try {
    const { content } = formToObj<PostTodo>(formData);
    const todo = await requestData<PostTodo, Todo>("POST")(path, { content });
    if (!todo) throw new Error("No data");
    revalidatePath("/");
  } catch (e) {
    console.error(e);
  }
}
