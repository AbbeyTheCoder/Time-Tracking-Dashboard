import profileStyle from "./Profile.module.css";

function Profile() {
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
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </section>
    </div>
  );
}
export default Profile;
