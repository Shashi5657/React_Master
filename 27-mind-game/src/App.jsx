import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentGuess, setCurrentGuess] = useState(50); // Start with a mid-point guess
  const [range, setRange] = useState({ min: 1, max: 100 });
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleHigher = () => {
    setRange((prev) => ({ ...prev, min: currentGuess + 1 }));
    setGuessCount((prev) => prev + 1);
  };

  const handleLower = () => {
    setRange((prev) => ({ ...prev, max: currentGuess - 1 }));
    setGuessCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (range.min > range.max) {
      setGameOver(true);
      return;
    }
    setCurrentGuess(Math.floor((range.min + range.max) / 2));
  }, [range]);

  const resetGame = () => {
    setRange({ min: 1, max: 100 });
    setCurrentGuess(50);
    setGuessCount(0);
    setGameOver(false);
  };

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
