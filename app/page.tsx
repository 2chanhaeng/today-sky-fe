import Image from "next/image";
import style from "@/styles/index.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <Image
        className={style.cloudimg3}
        src="/image/cloud/3.png"
        width={250}
        height={250}
        alt=""
      />
      <Image
        className={style.cloudimg1}
        src="/image/cloud/1.png"
        width={440}
        height={440}
        alt=""
      />
      <Image
        className={style.cloudimg2}
        src="/image/cloud/2.png"
        width={440}
        height={440}
        alt=""
      />

      <div className={style.text1}>그날의 하늘</div>
      <div className={style.text2}>기분이 태도가 되지 않게</div>
      <div className={style.form}>
        <a href="/login" className={style.loginButton}>
          LOGIN
        </a>
        <a href="/signup" className={style.resiterButton}>
          REGISTER
        </a>
      </div>
      <Image
        className={style.cloudimg4}
        src="/image/cloud/4.png"
        width={500}
        height={(600 / 500) * 200}
        alt=""
      />
      <Image
        className={style.cloudimg44}
        src="/image/cloud/4.png"
        width={500}
        height={(600 / 500) * 200}
        alt=""
      />
      <Image
        className={style.cloudimg5}
        src="/image/cloud/5.png"
        width={740}
        height={(550 / 740) * 200}
        alt=""
      />
      <Image
        className={style.cloudimg6}
        src="/image/cloud/6.png"
        width={600}
        height={(600 / 550) * 200}
        alt=""
      />
      <Image
        className={style.cloudimg7}
        src="/image/cloud/6.png"
        width={600}
        height={(600 / 550) * 200}
        alt=""
      />
    </main>
  );
}
