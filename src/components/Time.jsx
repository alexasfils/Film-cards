import { useState } from "react";

function Time() {
  const date = new Date().toLocaleTimeString();

  const [time, setTime] = useState(date);

  function startTime() {
    setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);
  }

  return (
    <div onClick={startTime}>
      <h1>{time}</h1>
    </div>
  );
}

export default Time;
