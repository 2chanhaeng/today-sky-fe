"use server";

import { Userinfo } from "@/types/login";
import formToObj from "@/utils/formToJson";
import requestData from "@/utils/requestData";
import { redirect } from "next/navigation";

export async function checkUsernameDupl(username: string) {
  try {
    const res = await requestData<null, { isDupl: boolean }>("GET")(
      `/signup/is-dupl?username=${username}`
    );
    return res;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export async function signup(formdata: FormData) {
  let path = `/signup?error=failed`;
  try {
    const userinfo = formToObj<Userinfo>(formdata);
    const res = await requestData<Userinfo, boolean>("POST")(
      "/signup",
      userinfo
    );
    if (!res) throw new Error("signup failed");
    console.log("signup success");
    path = "/login";
  } catch (e) {
    console.log(e);
  }
  return redirect(path);
}
