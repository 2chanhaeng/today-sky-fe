"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import style from "./style.module.scss";

export default function TurnEditor() {
  const [check, setCheck] = useState(false);
  return (
    <input
      type="checkbox"
      id="edit"
      className={style.edit}
      checked={check}
      onChange={checkTurnOff(check, setCheck)}
    />
  );
}

function checkTurnOff(
  check: boolean,
  setCheck: Dispatch<SetStateAction<boolean>>
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    const checkDialog =
      "Are you sure you want to turn off the editor? Any unsaved changes will be lost.";
    if (e.target.checked) {
      setCheck(true);
    } else {
      if (confirm(checkDialog)) setCheck(false);
    }
  };
}
