import { NextRequest } from "next/server";
import { DateParams } from "@/types/params";
import { Todo } from "@/types/response";
import getAccess from "@/utils/getAccess";
import reqData from "@/utils/reqData";
import getPathByDate from "@/utils/getPathByDate";

const getPath = getPathByDate("todo");

export async function GET(req: NextRequest, dates: DateParams) {
  try {
    const path = getPath(dates);
    const access = await getAccess();
    const data = await reqData<null, Todo[]>(path)(access)("GET")();
    return data ?? [];
  } catch (e) {
    console.log(e);
    return [];
  }
}

