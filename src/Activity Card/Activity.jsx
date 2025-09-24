import activityStyle from "./Activity.module.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";

function Activity({ data, timeframe, bgColor, bgImg }) {
  return (
    <div
      className={activityStyle.container}
      style={{ backgroundColor: bgColor, backgroundImage: bgImg }}
    >
      <main className={activityStyle.main}>
        <div className={activityStyle.main_top}>
          <p className={activityStyle.main_name}>{data.title}</p>
          <img src={ellipsis} alt="Info" />
        </div>

        <div className={activityStyle.main_bottom}>
          <p className={activityStyle.time_hrs}>
            {data["timeframes"][timeframe]["current"]}hrs
          </p>
          <p className={activityStyle.time_prev}>
            {timeframe == "daily"
              ? "Yesterday"
              : timeframe == "weekly"
              ? "Last Week"
              : "Last Month"}{" "}
            - {data["timeframes"][timeframe]["previous"]}hrs
          </p>
        </div>
      </main>
    </div>
  );
}
export default Activity;
