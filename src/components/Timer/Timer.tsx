import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState<number>(5);
  const [count, setCount] = useState<number>(timer);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (!isRunning) {
      return;
    }
    interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, count]);

  const handleSelectedTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(Number(event.target.value));
    setCount(Number(event.target.value));
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <form>
        <label>
          pick a time:
          <select value={timer} onChange={handleSelectedTime}>
            <option value={5}>5 mins</option>
            <option value={10}>10 mins</option>
            <option value={20}>20 mins</option>
          </select>
        </label>
      </form>
      <button onClick={handleStartStop}>{count > 0 && count && isRunning ? "Stop" : "Start"}</button>

      <p>count: {count > 0 ? count : 'time over :)'}</p>
    </>
  );
};

export default Timer;
