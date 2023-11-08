"use client";

import { MouseEvent } from "react";
import style from "./style.module.scss";
import { useSearchParams } from "next/navigation";

export default function ErrorDialog() {
  const error = useSearchParams().get("error");
  return (
    <dialog className={style.wrong} open={!!error}>
      아이디 혹은 비밀번호가 잘못되었습니다.
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          (e.currentTarget.parentElement as HTMLDialogElement)?.close();
        }}
      >
        ❌
      </button>
    </dialog>
  );
}
