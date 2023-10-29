"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Diary } from "@/types/response";
import style from "./style.module.scss";

/**
 * ```
 * ┌─────────┬─────────┬──────────────────┐
 * │  date   │ emotion │                  │
 * ├─────────┴─────────┤     content      │
 * │       image       │                  │
 * └───────────────────┴──────────────────┘
 * ```
 */
export default function MonthlyDiary({
  year,
  month,
  date,
}: {
  year: number;
  month: number;
  date: number;
}) {
  const [diary, setDiary] = useState<Diary>();
  useEffect(() => {
    (async (...dates) => setDiary(await getDiary(...dates)))(year, month, date);
  }, [year, month, date]);
  return (
    diary && (
      <section id="diary">
        <h2 className={style.date}>{date}일</h2>
        {diary.emotion && (
          <Image
            src={diary.emotion}
            className={style.emo}
            width={100}
            height={100}
            alt={diary.emotionImage!}
          />
        )}
        {diary.image && (
          <Image
            src={diary.image}
            className={style.img}
            width={100}
            height={100}
            alt={`${year}년 ${month}월 ${date}일 사진`}
          />
        )}
        <p className={style.content}>{diary.content}</p>
      </section>
    )
  );
}

async function getDiary(year: number, month: number, date: number) {
  try {
    const res = await fetch(`/api/diary/${year}/${month}/${date}`);
    const json = await res.json();
    return json as Diary;
  } catch (e) {
    return {
      emotion: "",
      emotionImage: "",
      image: "",
      content: "일기가 없습니다.",
    } as Diary;
  }
}
