import style from "./style.module.scss";

interface ContentProps {
  content: string;
}

export default function Content({ content }: ContentProps) {
  return (
    <div className={style.contentWrapper}>
      <p className={style.content}>{content}</p>
      {/* TODO: editor */}
    </div>
  );
}
