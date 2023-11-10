"use client";

import { useTransition } from "react";
import Textarea from "./Textarea";
import { postDiary } from "./actions";
import style from "../style.module.scss";

export default function Editor({ prev, path }: { prev: string; path: string }) {
  const post = postDiary.bind(null, path);
  const [isPending, startTransition] = useTransition();
  return (
    <form className={style.editor} action={post}>
      <Textarea name="content" defaultValue={prev} rows={4} />
      <button>Save</button>
    </form>
  );
}
