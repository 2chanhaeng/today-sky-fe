import { DateParams } from "@/types/params";
import Todos from "@/components/Todo/Daily";

export default function DailyTodosPage({ params }: DateParams) {
  return <Todos {...params} />;
}
