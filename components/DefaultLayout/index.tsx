import { App, AppDates } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import { checkLogin } from "@/utils/checkLoggedStatus";
import Header from "@/components/DefaultHeader";
import Calendar from "@/components/Calendar";
import style from "./style.module.scss";

export default function createDefaultLayout(app: App) {
  return function DefaultLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: AppDates;
  }) {
    const path = getPathByDate(app)({ params });
    checkLogin(path);
    params.app = app;
    return (
      <main className={style.main}>
        <Header {...params} />
        <Calendar {...params} />
        {children}
      </main>
    );
  };
}
