import { useState, useEffect } from "react";
import Profile from "./Profile Card/Profile";
import Activity from "./Activity Card/Activity";
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
  "url(/icon-work.svg)",
  "url(/icon-play.svg)",
  "url(/icon-social.svg)",
  "url(/icon-exercise.svg)",
  "url(/icon-study.svg)",
  "url(/icon-self-care.svg)",
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
      const res = await fetch("/data.json");
      const d = await res.json();
      setData(d);
    }
    fetchData();
  }, []);

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
