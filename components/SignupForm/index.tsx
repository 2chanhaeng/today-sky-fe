"use client";

import { FocusEvent, useState } from "react";
import style from "./style.module.scss";
import UnPwInputs from "@/types/UnPwInputs";
import UnPwForm from "../UnPwForm";

export default function SignupForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  } as UnPwInputs);
  return (
    <form className={style.form} method="POST" action="/api/signup">
      <UnPwForm inputs={inputs} setInputs={setInputs} onIdBlur={checkIdDupl} />
      <button className={style.toSignup} type="submit">
        회원가입
      </button>
    </form>
  );
}

async function checkIdDupl(e: FocusEvent<HTMLInputElement>) {
  const res = await fetch(`/api/signup/is-dupl?username=${e.target.value}`);
  const { isDupl } = await res.json();
  if (isDupl) {
    e.target.setCustomValidity("이미 존재하는 아이디입니다.");
    e.target.reportValidity();
    e.target.focus();
  } else {
    e.target.setCustomValidity("");
  }
}
