"use client";

import { Dispatch, FocusEvent, SetStateAction } from "react";
import style from "./style.module.scss";
import UnPwInputs from "@/types/UnPwInputs";

export default function IdPwForm({
  inputs,
  setInputs,
  onIdBlur,
}: {
  inputs: UnPwInputs;
  setInputs: Dispatch<SetStateAction<UnPwInputs>>;
  onIdBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className={style.main}>
      <label className={style.username}>
        🪪
        <input
          type="text"
          name="username"
          placeholder="username"
          value={inputs.username}
          onChange={onChange}
          onBlur={onIdBlur}
          autoComplete="username"
          autoFocus
          required
        />
      </label>
      <label className={style.password}>
        🔑
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
          value={inputs.password}
          onChange={onChange}
          required
        />
      </label>
      <dialog id="wrong-input" className={style.wrong}>
        아이디 혹은 비밀번호가 잘못되었습니다.
      </dialog>
    </section>
  );
}
