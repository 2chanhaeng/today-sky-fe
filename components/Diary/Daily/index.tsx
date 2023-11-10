import { Dates } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import Editor from "./Editor";
import TurnEditor from "./TurnEditor";
import { getDiary } from "./actions";
import style from "./style.module.scss";

const getPath = getPathByDate("diary");

export default async function DailyDiary(params: Dates) {
  const path = getPath({ params });
  const diary = await getDiary(path);
  return (
    <section className={style.diary}>
      <Editor prev={diary.content} path={path} />
    </section>
  );
}
