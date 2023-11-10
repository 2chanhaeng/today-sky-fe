"use client";

import { useTransition } from "react";
import Textarea from "./Textarea";
import { postDiary } from "./actions";
import style from "../style.module.scss";

export default function Editor({ prev, path }: { prev: string; path: string }) {
  const [isPending, startTransition] = useTransition();
  const post = (value: string) =>
    startTransition(() => {
      const formData = new FormData();
      formData.append("content", value);
      postDiary(path, formData);
    });
  return (
    <form className={style.editor} action={post}>
      <Textarea name="content" defaultValue={prev} rows={4} />
      <button>Save</button>
    </form>
  );
}
