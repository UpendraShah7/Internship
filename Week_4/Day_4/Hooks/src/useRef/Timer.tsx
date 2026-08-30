import { useRef } from "react";

function Timer() {
  
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const startTimer = () => {
    
    timerRef.current = setTimeout(() => {
      console.log("Timer finished!");
    }, 3000);
    console.log(timerRef);
  };


  const stopTimer = () => {
    // Take the ID out from the useRef and use it to cancel the timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;