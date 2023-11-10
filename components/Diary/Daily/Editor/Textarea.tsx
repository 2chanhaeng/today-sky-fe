"use client";

import { ChangeEvent } from "react";

interface ElemProps {
  name: string;
  defaultValue?: string;
}
interface ActionProps {
  post: (value: string) => void;
}
interface Props extends ElemProps, ActionProps {}

export default function Textarea({ post, ...elemProps }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // textarea auto resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

  };
  return (
    <textarea
      {...elemProps}
      onChange={handleChange}
    ></textarea>
  );
}
