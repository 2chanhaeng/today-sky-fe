"use client";

import { FocusEvent } from "react";
import { checkUsernameDupl } from "./actions";

export default function UsernameInput() {
  return (
    <input
      type="text"
      name="username"
      placeholder="username"
      onBlur={checkValid}
      autoComplete="username"
      autoFocus
      required
    />
  );
}

async function checkValid(e: FocusEvent<HTMLInputElement>) {
  const { target } = e;
  const username = target.value;
  const res = await checkEmptyOrDupl(username);
  const report = reportValidity(target);
  report(res);
}

async function checkEmptyOrDupl(username: string) {
  if (!username) return "아이디를 입력해주세요.";
  const res = await checkUsernameDupl(username);
  if (!res) return "서버에 연결할 수 없습니다.";
  if (res.isDupl) return "이미 존재하는 아이디입니다.";
  return "";
}

function reportValidity(target: HTMLInputElement) {
  return (error: string) => {
    target.setCustomValidity(error);
    if (error) {
      target.reportValidity();
      setTimeout(() => target.focus(), 0);
      // without setTimeout, focus() doesn't work when the target is empty
    }
  };
}
