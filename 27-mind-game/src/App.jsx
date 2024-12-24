import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="App"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        <header>
          <h1>The Mind-Reading Number Game</h1>
        </header>
      </div>
    </>
  );
}

export default App;
