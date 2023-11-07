import UsernameInput from "./UsernameInput";
import ErroDialog from "./ErrorDialog";
import style from "./style.module.scss";

export default function UserInfo() {
  return (
    <section className={style.userinfo}>
      <label className={style.username}>
        🪪
        <UsernameInput />
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
      <ErroDialog />
    </section>
  );
}
