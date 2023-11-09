"use client";

import { ChangeEvent } from "react";

interface Props {
  rows: number;
  name: string;
  defaultValue?: string;
}

export default function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        // textarea auto resize
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}
    ></textarea>
  );
}
