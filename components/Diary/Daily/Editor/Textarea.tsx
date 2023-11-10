"use client";

import { ChangeEvent, useState } from "react";

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
      rows={Math.max(value.split("\n").length, 5)}
    ></textarea>
  );
}
