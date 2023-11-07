"use server";

import requestData from "@/utils/requestData";

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
