import ErrorDialog from "@/components/Userinfo/ErrorDialog";
import style from "./style.module.scss";

export default function UserInfo() {
  return (
    <section className={style.userinfo}>
      <label className={style.username}>
        🪪
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="username"
          autoFocus
          required
        />
      </label>
      <label className={style.password}>
        🔑
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
          required
        />
      </label>
      <ErrorDialog />
    </section>
  );
}
