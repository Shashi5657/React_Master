import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentGuess, setCurrentGuess] = useState(50); // Start with a mid-point guess
  const [range, setRange] = useState({ min: 1, max: 100 });
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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
