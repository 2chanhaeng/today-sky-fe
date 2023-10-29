import { Dates } from "@/types/params";
import { Diary } from "@/types/response";
import getAccess from "@/utils/getAccess";
import reqData from "@/utils/reqData";
import Editor from "./Editor";
import style from "./style.module.scss";
import TurnEditor from "./TurnEditor";

export default async function DailyDiary({ year, month, date }: Dates) {
  const diary = await getDiary({ year, month, date });
  return (
    <section className={style.diary}>
      <TurnEditor />
      <article className={style.content}>{diary.content}</article>
      <Editor prev={diary.content} datePath={`/${year}/${month}/${date}`} />
      <label htmlFor="edit" className={style.edit}></label>
    </section>
  );
}

async function getDiary({ year, month, date }: Dates) {
  const path = `/diary/${year}/${month}/${date}`;
  const diary = await reqData<null, Diary>(path)(await getAccess())("GET")();
  if (!diary) return { date, content: "" };
  return diary;
}
