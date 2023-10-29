import { DateParams } from "@/types/params";

export default function getPathByDate(app: string) {
  return ({ params }: DateParams) => {
    const { year, month, date } = params;
    return `/${app}/${year}/${month}${date ? `/${date}` : ""}`;
  };
}
