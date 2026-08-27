//clean up fucntion runs :
//Before the effect runs again
//When the component unmounts

import { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      alert("Cleaned up")
    };
  }, []);
  // it will run only on first render

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}

export default TimerComponent;