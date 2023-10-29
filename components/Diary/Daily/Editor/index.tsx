import style from "../style.module.scss";
import Textarea from "./Textarea";

export default function Editor({
  prev,
  path: path,
}: {
  prev: string;
  path: string;
}) {
  return (
    <form className={style.editor} action={`/api${path}`} method="POST">
      <Textarea name="content" defaultValue={prev} rows={4} />
      <button>Save</button>
    </form>
  );
}
