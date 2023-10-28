"use client";

import { useState } from "react";
import style from "./style.module.scss";
import UnPwInputs from "@/types/UnPwInputs";
import UnPwForm from "../UnPwForm";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  } as UnPwInputs);
  return (
    <form className={style.form} method="POST" action="/api/login">
      <UnPwForm inputs={inputs} setInputs={setInputs} />
      <label className={style.keep}>
        <input type="checkbox" id="keep" name="keep" value="on" />
        로그인 상태 유지
      </label>
      <button type="submit" className={style.toLogin}>
        로그인
      </button>
      <a className={style.toSignup} href="/signup">
        회원가입
      </a>
    </form>
  );
}
