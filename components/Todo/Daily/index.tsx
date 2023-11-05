import { Dates } from "@/types/params";
import { Todo } from "@/types/response";
import getPathByDate from "@/utils/getPathByDate";
import Item from "../Item";
import { getTodos, postTodo } from "./utils";
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
  const path = getPathByDate("todo")({ params });
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
