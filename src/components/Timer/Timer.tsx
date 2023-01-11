import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(300);
  const [time, setTime] = useState<string>("05:00");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (!isRunning) {
      return;
    }
    interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
        setTime("Time's up!");
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60;
        setTime(
          `${minutes < 10 ? "0" : ""}${minutes}:${sec < 10 ? "0" : ""}${sec}`
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleSelectedTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeconds(parseInt(event.target.value));
    const minutes = Math.floor(parseInt(event.target.value) / 60);
    setTime(`${minutes < 10 ? "0" : ""}${minutes}:00`);
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <form>
        <label>
          pick a time:
          <select value={seconds} onChange={handleSelectedTime}>
            <option value={300}>5 mins</option>
            <option value={600}>10 mins</option>
            <option value={1200}>20 mins</option>
          </select>
        </label>
      </form>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>

      <p>Time remaining: {time}</p>
    </>
  );
};

export default Timer;
