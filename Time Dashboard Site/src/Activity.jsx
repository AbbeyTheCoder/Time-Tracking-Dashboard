import activityStyle from "./Activity.module.css";
// import briefcase from "./assets/images/icon-work.svg";
import ellipsis from "./assets/images/icon-ellipsis.svg";

function Activity() {
  return (
    <div className={activityStyle.container}>
      <main className={activityStyle.main}>
        <div className={activityStyle.main_top}>
          <p className={activityStyle.main_name}>Work</p>
          <img src={ellipsis} alt="Info" />
        </div>

        <div className={activityStyle.main_bottom}>
          <p className={activityStyle.time_hrs}>32hrs</p>
          <p className={activityStyle.time_prev}>Last Week - 36 hrs</p>
        </div>
      </main>
    </div>
  );
}
export default Activity;
