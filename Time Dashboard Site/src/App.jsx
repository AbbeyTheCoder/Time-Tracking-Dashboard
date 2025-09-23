import { useState, useEffect } from "react";
import Profile from "./Profile";
import Activity from "./Activity";
import "./App.css";

// Cards Colours
const bgColor = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];
// Cards Images urls
const bgImage = [
  "url(src/assets/images/icon-work.svg)",
  "url(src/assets/images/icon-play.svg)",
  "url(src/assets/images/icon-social.svg)",
  "url(src/assets/images/icon-exercise.svg)",
  "url(src/assets/images/icon-study.svg)",
  "url(src/assets/images/icon-self-care.svg)",
];

function App() {
  let [data, setData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("daily");

  // Handles Change of Timeframes
  const handleTimeframeClick = (e) => {
    setTimeFrame(e.target.getAttribute("data-timeframe"));
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("src/assets/data.json");
      const d = await res.json();
      setData(d);
    }
    fetchData();
  }, [data]);

  return (
    <main id="activities">
      {/* User Profile Card */}
      <Profile timeFrameClick={handleTimeframeClick} />
      {/* Actvities Cards */}
      {data.map((activity, index) => {
        return (
          <Activity
            key={index}
            data={activity}
            timeframe={timeFrame}
            bgColor={bgColor[index]}
            bgImg={bgImage[index]}
          />
        );
      })}
    </main>
  );
}

export default App;
