import profileStyle from "./Profile.module.css";

function Profile({ timeFrameClick }) {
  return (
    <div id={profileStyle.container}>
      <header>
        <img src="src/assets/images/image-jeremy.png" alt="User Profile Pic" />
        <div>
          <p>Report for</p>
          <p className={profileStyle.user_name}>
            <span>Jeremy</span>
            <span>Robson</span>
          </p>
        </div>
      </header>

      <section className={profileStyle.time_interval}>
        <button onClick={timeFrameClick} data-timeframe="daily">
          Daily
        </button>
        <button onClick={timeFrameClick} data-timeframe="weekly">
          Weekly
        </button>
        <button onClick={timeFrameClick} data-timeframe="monthly">
          Monthly
        </button>
      </section>
    </div>
  );
}
export default Profile;
