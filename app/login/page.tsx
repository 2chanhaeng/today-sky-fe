import HomeHeader from "@/components/HomeHeader";
import style from "@/styles/login/index.module.scss";

export default function LoginPage() {
  return (
    <main>
        <div className={style.login_warp}>
          <form name="login_form" id="login_form" className={style.login_form} method="POST">
            <div className={style.panel_inner}>
              <div className={style.form_item_top}>
                <label htmlFor="username" className={style.form_item_label}>ID</label>
                <input
                  type="text"
                  id="username"
                  className={style.username}
                  name="username"
                  placeholder="아이디"
                  required
                />
              </div>
              <div className={style.form_item_bottom}>
                <label htmlFor="password" className={style.form_item_label}>pw</label>
                <input
                  type="password"
                  id="password"
                  className={style.password}
                  name="password"
                  placeholder="비밀번호"
                  required
                />
              </div>
              <div className={style.keep}>
                <label className={style.keep_check}>
                  <input type="checkbox" id="keep" name="keep" value="on"/>
                  로그인 상태 유지
                </label>
              </div>
            </div>
            <dialog id="wrong-input">
              아이디 혹은 비밀번호가 잘못되었습니다.
            </dialog>
            <button type="submit" className={style.btn}>
              로그인
            </button>
            <a className={style.btn} href="/signup">
              회원가입
            </a>
          </form>
          <form action="/profile" method="POST" name="form_info">
            <input type="hidden" id="profile_userid" name="userid" />
          </form>
        </div>
      <HomeHeader />
    </main>
  );
}
