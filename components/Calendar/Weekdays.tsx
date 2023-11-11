import style from "./style.module.scss";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function Weekdays() {
  return (
    <div className={style.weekdays}>
      {weekdays.map((day) => (
        <div className={`${style[day.toLowerCase()]} ${style.day}`} key={day}>
          {day}
        </div>
      ))}
    </div>
  );
}
