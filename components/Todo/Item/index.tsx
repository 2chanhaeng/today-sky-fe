import { revalidatePath } from "next/cache";
import { Todo } from "@/types/response";
import requestData from "@/utils/requestData";
import style from "./style.module.scss";
import Content from "./Content";

interface ItemProps extends Todo {}

/**
 * ```
 * ┌─────────┬────────────────────────────┐
 * │         │           content          │
 * │ checked ├────────────────────────────┤
 * │         │           comment          │
 * └─────────┴────────────────────────────┘
 * ```
 */
export default function Item({
  id,
  checked,
  content,
}: // comment: [comment],
ItemProps) {
  const destroy = deleteTodo.bind(null, id);
  const check = checkTodo.bind(null, { id, checked });
  const checkButtonClasses = [
    style.check,
    checked ? style.checked : style.unchecked,
  ];
  const checkButtonClassNames = checkButtonClasses.join(" ");
  console.log(JSON.stringify(style));
  return (
    <li id={id} className={style.todo}>
      <form className={style.todoform}>
        <button formAction={check} className={checkButtonClassNames}>
          {checked ? "⭕️" : "❌"}
        </button>
        <Content content={content} />
        {/* TODO: comment */}
        <button formAction={destroy} className={style.delete}>
          🗑
        </button>
      </form>
    </li>
  );
}

async function deleteTodo(id: string, _: FormData) {
  "use server";
  try {
    console.log(id);
    await requestData<null, null>("DELETE")(`/todo/${id}`);
    revalidatePath("/");
  } catch (e) {
    console.error(e);
  }
}

async function checkTodo(
  { id, checked }: { id: string; checked: boolean },
  _: FormData
) {
  "use server";
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
