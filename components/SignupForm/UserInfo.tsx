import UsernameInput from "./UsernameInput";
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
      <dialog id="wrong-input" className={style.wrong}>
        아이디 혹은 비밀번호가 잘못되었습니다.
      </dialog>
    </section>
  );
}
