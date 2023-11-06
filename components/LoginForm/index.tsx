"use client";

import { useState } from "react";
import Link from "next/link";
import UnPwInputs from "@/types/UnPwInputs";
import UnPwForm from "../UnPwForm";
import { login } from "./utils";
import style from "./style.module.scss";

interface LoginFormProps {
  redirect?: string;
}

export default function LoginForm({ redirect }: LoginFormProps) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  } as UnPwInputs);
  const action = login.bind(null, { redirect });
  return (
    <form className={style.form} method="POST" action={action}>
      <UnPwForm inputs={inputs} setInputs={setInputs} />
      <label className={style.keep}>
        <input type="checkbox" id="keep" name="keep" value="keep" checked />
        로그인 상태 유지
      </label>
      <button className={style.toLogin}>로그인</button>
      <Link className={style.toSignup} href="/signup">
        회원가입
      </Link>
    </form>
  );
}
