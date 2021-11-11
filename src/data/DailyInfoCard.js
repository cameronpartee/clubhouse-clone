import style from "../style/dailyInfoCard.module.css";
import data from "./dailyCard.json";

export default function dailyInfoCard() {
  console.log(data[0].title);
  return (
    <div className={style.dailyCard}>
      {data.map((item) => (
        <div>
          <span className="">{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
