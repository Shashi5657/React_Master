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
        <main>
          {!gameOver ? (
            <div>
              <p>Think of a number between 1 and 100, and I'll guess it!</p>
              <h2>Is your number {currentGuess}?</h2>
              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={handleLower}
                  style={{
                    padding: "10px 20px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#FF6347",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Lower
                </button>
                <button
                  onClick={handleHigher}
                  style={{
                    padding: "10px 20px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Higher
                </button>
              </div>
              <p style={{ marginTop: "20px" }}>
                Number of guesses: {guessCount}
              </p>
            </div>
          ) : (
            <div>
              <h2>Game Over!</h2>
              <p>It seems like you've tricked me! Want to try again?</p>
              <button
                onClick={resetGame}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#2196F3",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Play Again
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
