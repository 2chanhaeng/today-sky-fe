import { Todo } from "@/types/response";
import style from "./style.module.scss";
import Content from "./Content";
import { deleteTodo, checkTodo } from "./actions";

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
  return (
    <li id={id} className={style.todo}>
      <form className={style.todoform}>
        <button formAction={check} className={checkButtonClassNames}></button>
        <Content content={content} />
        {/* TODO: comment */}
        <button formAction={destroy} className={style.delete}>
          🗑
        </button>
      </form>
    </li>
  );
}
