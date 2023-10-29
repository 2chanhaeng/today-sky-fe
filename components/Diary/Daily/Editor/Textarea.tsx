"use client";

import { ChangeEvent } from "react";

export default async function Textarea({
  rows,
  name,
  defaultValue,
}: {
  rows: number;
  name: string;
  defaultValue?: string;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      defaultValue={defaultValue}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        // textarea auto resize
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}
    ></textarea>
  );
}
