import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function checkLoggedStatus(passIfLogged: boolean) {
  return (path = "/home") => {
    if (passIfLogged !== cookies().has("access"))
      redirect(`/api/login?redirect=${path}`);
  };
}

export const checkLogin = checkLoggedStatus(true);
export const checkLogout = checkLoggedStatus(false);
