import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const TimerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open()
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaininng) => prevTimeRemaininng - 10);
      // setTimerExpired(true);
      // dialog.current.open();
    }, 10);
    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p> You Lost!! </p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={TimerIsActive ? handleStop : handleStart}>
            {TimerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={TimerIsActive ? "active" : undefined}>
          {TimerIsActive ? " Time is running.." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
