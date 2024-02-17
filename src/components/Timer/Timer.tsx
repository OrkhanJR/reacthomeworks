// import React, { useState } from "react";

// const Timer = () => {


  
//   const [time, setTime] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [intervalID, setIntervalID] = useState(null);

//   const startTimer = () => {
//     setIsActive(true);

//     const startTime = Date.now();
//     setIntervalID(
//       setInterval(() => {
//         const elapsedTime = (Date.now() - startTime) / 1000;
//         setTime(Math.round((time + elapsedTime) * 100) / 100);
//       }, 10)
//     );
//   };

//   const pauseTimer = () => {
//     setIsActive(false);
//     setIsPaused(true);
//     clearInterval(intervalID);
//   };

//   const continueTimer = () => {
//     setIsActive(true);
//     setIsPaused(false);
//     startTimer();
//   };

//   const stopTimer = () => {
//     setIntervalID(clearInterval(intervalID));
//     setIsActive(false);
//     setIsPaused(false);
//     setTime(0);
//   };

//   return (
//     <div>
//       <div>Time: {time.toFixed(2)} s</div>
//       <button onClick={startTimer} disabled={isActive || isPaused}>
//         Start
//       </button>
//       <button
//         onClick={isPaused ? continueTimer : pauseTimer}
//         disabled={!isActive && !isPaused}
//       >
//         {isActive ? "Pause" : "Continue"}
//       </button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// };

// export default Timer;
