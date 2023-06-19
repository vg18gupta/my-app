import React, { useState, useEffect } from "react";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [ minutes, setMinutes] = useState(0);
  const [ seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;
      intervalId = setInterval(() => setTime((time) => time + 1), 10);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setMinutes(Math.floor((time % 360000) / 6000));
    setSeconds(Math.floor((time % 6000) / 100));
  }, [time])

  const handleSecondChange = (e) => {
    setSeconds(e.target.value);
    setTime(e.target.value * 100);
  }
  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
    setTime(e.target.value * 6000);
  }
  const handleDragStart = (event) => {

  }
  const handleDropEvent = (event) => {

  }
  const allowDrop = (event) => {
    event.preventDefault();
}
  return (
    <div className="clock-container">
    <div className="clock">
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${minutes * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${seconds * 6}deg)`
          }}
          draggable="true" 
          ondragstart={handleDragStart} 
          ondrop={handleDropEvent} ondragover={allowDrop}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    <p className="stopwatch-time">
        <input onChange={handleMinutesChange}/> : 
        <input onChange={handleSecondChange}/>
    </p>
</div>
  );
};

export default Stopwatch;
