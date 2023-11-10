import { DateParams } from "@/types/params";
import Diary from "@/components/Diary/Daily";

export default async function DailyDiary({ params }: DateParams) {
  return <Diary {...params} />;
}
