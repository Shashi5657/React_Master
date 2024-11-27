import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [colors, setColors] = useState([]);

  const moodColorMapping = {
    happy: ["#FFD700", "#FFEC8B", "#FFFAF0", "#FFF68F", "#FFE4B5"],
    sad: ["#1E90FF", "#4682B4", "#87CEFA", "#ADD8E6", "#B0C4DE"],
    energetic: ["#FF4500", "#FF6347", "#FF7F50", "#FF8C00", "#FFA07A"],
    calm: ["#2E8B57", "#3CB371", "#66CDAA", "#8FBC8F", "#20B2AA"],
    romantic: ["#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#FF5E95"],
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const generateColors = () => {
    if (moodColorMapping[mood.toLowerCase()]) {
      setColors(moodColorMapping[mood.toLowerCase()]);
    } else {
      setColors([]);
    }
  };

  return (
    <>
      <div
        className="App"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        <header>
          <h1>Mood-Based Color Generator</h1>
        </header>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
