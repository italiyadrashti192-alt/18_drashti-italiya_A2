import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card p-5 text-center">
      <h2>Digital Clock</h2>

      <h1>
        {time.toLocaleTimeString()}
      </h1>

      <p>
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default DigitalClock;