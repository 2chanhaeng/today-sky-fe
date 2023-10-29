import { Dates } from "@/types/params";
import { Diary } from "@/types/response";
import Editor from "./Editor";
import style from "./style.module.scss";
import TurnEditor from "./TurnEditor";
import getPathByDate from "@/utils/getPathByDate";

const getPath = getPathByDate("diary");

export default async function DailyDiary(params: Dates) {
  const path = getPath({ params });
  const diary = await getDiary(path);
  return (
    <section className={style.diary}>
      <TurnEditor />
      <article className={style.content}>{diary.content}</article>
      <Editor prev={diary.content} path={path} />
      <label htmlFor="edit" className={style.edit}></label>
    </section>
  );
}

async function getDiary(path: string): Promise<Diary> {
  const res = await fetch(`/api${path}`);
  const diary = await res.json();
  if (!diary) return { content: "" };
  return diary;
}
