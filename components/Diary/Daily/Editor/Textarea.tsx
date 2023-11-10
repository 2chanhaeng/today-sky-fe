"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";
import style from "../style.module.scss";

interface ElemProps {
  name: string;
  defaultValue?: string;
}
interface ActionProps {
  post: (value: string) => void;
}
interface Props extends ElemProps, ActionProps {}

export default function Textarea({ post, ...elemProps }: Props) {
  const [value, setValue] = useState(elemProps.defaultValue || "");
  const postRef = useRef(post);
  useEffect(() => {
    const timeOutId = setTimeout(() => postRef.current(value), 500);
    return () => clearTimeout(timeOutId);
  }, [value]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // textarea auto resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    setValue(e.target.value);
  };
  return (
    <textarea
      {...elemProps}
      value={value}
      onChange={handleChange}
      className={style.textarea}
      rows={Math.max(value.split("\n").length, 5)}
    ></textarea>
  );
}
