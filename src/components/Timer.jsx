import React, { useState, useContext, useEffect } from "react";
import SettingsContext from "../context/SettingsContext";
const Timer = () => {
  const [buttonText, setButtonText] = useState("START");
  const [time, setTime] = useState(0);
  const { pomodoro, shortBreak, longBreak, selectedOption, setSelectedOption } = useContext(SettingsContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //
  useEffect(() => {
    switch (selectedOption) {
      case "Pomodoro":
        setTime(pomodoro * 60);
        setButtonText("START");

        break;
      case "Short Break":
        setTime(shortBreak * 60);
        setButtonText("START");

        break;
      case "Long Break":
        setTime(longBreak * 60);
        setButtonText("START");

        break;
      default:
        setTime(pomodoro * 60);
        setButtonText("START");

        break;
    }
  }, [pomodoro, shortBreak, longBreak, selectedOption]);

  //timer logic
  useEffect(() => {
    let interval;
    if (buttonText === "PAUSE") {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setButtonText("START");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [buttonText]);

  //format time
  const formatTime = (timeInSeconds) => {
    const min = Math.floor(timeInSeconds / 60);
    const sec = timeInSeconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };
  const handleButtonClick = () => {
    setButtonText((prevButtonText) => (prevButtonText === "START" ? "PAUSE" : "START"));
  };

  //progress bar
  const progressBarFillStyle = {
    width: `${(1- time / (selectedOption === "Pomodoro" ? pomodoro * 60 : selectedOption === "Short Break" ? shortBreak * 60 : longBreak * 60)) * 100}%`,
    background: "#e1e1e1",
    height: "100%",
    borderRadius: "inherit",
    transition: 'width 1s linear'
  };

  return (
    <div className='text-text max-w-[500px] mx-auto p-5 font-inconsolata'>
      <div className='flex items-center justify-center mx-auto h-10 mt-[6rem]'>
        <div className='w-[39rem] bg-outline h-[3px] rounded-full overflow-hidden'>
          <div style={progressBarFillStyle}></div>
        </div>
      </div>
      <div className='container bg-componentsbg outline outline-1 outline-outline p-5 mt-3 mx-auto h-[18rem] rounded-md'>
        <div className='flex items-center justify-center h-10 gap-2'>
          <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button
              className={`'p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg' ${selectedOption === "Pomodoro" ? "bg-hoverBg p-1 text-[#e1e1e1] " : ""}`}
              onClick={() => {
                handleOptionClick("Pomodoro");
              }}>
              Pomodoro
            </button>
          </div>
          <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button
              className={`'p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg' ${selectedOption === "Short Break" ? "bg-hoverBg p-1 text-[#e1e1e1] " : ""}`}
              onClick={() => {
                handleOptionClick("Short Break");
              }}>
              Short Break
            </button>
          </div>
          <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button
              className={`'p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg' ${selectedOption === "Long Break" ? "bg-hoverBg p-1 text-[#e1e1e1] " : ""}`}
              onClick={() => {
                handleOptionClick("Long Break");
              }}>
              Long Break
            </button>
          </div>
        </div>
        <div className='text-9xl sm:text-8xl text-center flex items-center justify-center h-[10rem]'>{formatTime(time)}</div>
        <div className='flex items-center justify-center mx-auto h-10 '>
          <button
            className={`text-2xl px-7 py-1 rounded-md active:mt-1 bg-text text-background font-bold border-b-[#c7c7c7] active:border-0 ${buttonText === "PAUSE" ? "border-0 mt-1" : "border-b-4"} transition-all duration-100 ease-in-out`}
            onClick={(e) => {
              setButtonText(buttonText === "START" ? "PAUSE" : "START");
            }}>
            {buttonText}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Timer;
