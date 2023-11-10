"use client";

import { useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
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
    <form className={style.editor}>
      <Textarea name="content" defaultValue={prev} post={post} />
      <IsPending isPending={isPending} />
    </form>
  );
}

function IsPending({ isPending }: { isPending: boolean }) {
  return (
    <span>
      {isPending ? (
        <>
          Saving...
          <FaSpinner className={style.spinner} />
        </>
      ) : (
        "Saved."
      )}
    </span>
  );
}
