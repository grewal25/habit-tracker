import { useState } from "react";

export default function GymHome() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [weeks, setWeeks] = useState<string>("");

  const handleClick = (day: string) => {
    setWeeks(day);
  };

  return (
    <>
      <h3>Gym home page</h3>
      <p>select week:</p>
      {days.map((day, idx) => (
        <li key={idx}>
          <button onClick={() => handleClick(day)}>{day}</button>
        </li>
      ))}
      {<p>{weeks}</p>}
    </>
  );
}
