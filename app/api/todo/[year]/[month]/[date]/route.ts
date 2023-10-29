import { NextRequest, NextResponse } from "next/server";
import { DateParams } from "@/types/params";
import { Todo, PostTodo as ResPostTodo } from "@/types/response";
import { PostTodo as ReqPostTodo } from "@/types/request";
import getAccess from "@/utils/getAccess";
import reqData from "@/utils/reqData";
import getPathByDate from "@/utils/getPathByDate";
import paramsToObject from "@/utils/paramsToObject";

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

export async function POST(req: NextRequest, dates: DateParams) {
  try {
    const path = getPath(dates);
    const access = await getAccess();
    const todo = paramsToObject<ReqPostTodo>(await req.json());
    await reqData<ReqPostTodo, ResPostTodo>(path)(access)("POST")(todo);
    return NextResponse.redirect(
      req.nextUrl.href.replace("/api", ""), //
      { status: 303 }
    );
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
