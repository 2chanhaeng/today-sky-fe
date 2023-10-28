import config from "@/config/index.mjs";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("/signup/is-dupl", config.api);
  const username = req.nextUrl.searchParams.get("username");
  console.log(username);
  if (!username) {
    return Response.json({ isDupl: false });
  }
  url.searchParams.set("username", username);
  const res = await fetch(url.toString());
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}
