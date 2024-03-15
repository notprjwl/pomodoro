import React, { useContext, useState } from "react";
import Timer from "./Timer";
import SettingsContext from "../context/SettingsContext";

const SettingsModal = ({ closeModal }) => {
  const [pomodoroValue, setPomodoroValue] = useState(10);
  const [shortBreakValue, setShortBreakValue] = useState(5);
  const [longBreakValue, setLongBreakValue] = useState(15);

  const { setPomodoro, setShortBreak, setLongBreak } = useContext(SettingsContext);

  const handleOkClick = () => {
    setPomodoro(pomodoroValue);
    setShortBreak(shortBreakValue);
    setLongBreak(longBreakValue);
    closeModal();
  };

  return (
    <div className='fixed container top-0 left-0 h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-3 px-0 rounded-lg sm:w-[19rem]'>
        <div className='flex justify-between items-center w-full text-center border-b pb-2'>
          <div className='flex-grow text-center pl-7'>Settings</div>
          <div className='mr-2' onClick={closeModal}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </div>
        </div>
        <div className='p-2 mx-2 flex items-center gap-1'>
          <span className='items-center mb-[0.1rem]'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h--6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>
          </span>
          TIMER
        </div>
        <div className='flex mx-5 justify-between gap-2'>
          <div>
            <label className='text-[0.9rem]'>Pomodoro</label>
            <div>
              <input
                type='number'
                min={-999}
                max={999}
                maxLength={3}
                className='bg-gray-100 w-20 rounded-md p-1 px-2 text-black outline-0 font-sans'
                onChange={(e) => {
                  setPomodoroValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label className='text-[0.9rem]'>Short Break</label>
            <div>
              <input
                type='number'
                min={0}
                max={999}
                className='bg-gray-100 w-20 rounded-md p-1 px-2 text-black outline-0 font-sans'
                onChange={(e) => {
                  setShortBreakValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label className='text-[0.9rem]'>Long Break</label>
            <div>
              <input
                type='number'
                min={0}
                max={999}
                className='bg-gray-100 w-20 rounded-md p-1 px-2 text-black outline-0 font-sans'
                onChange={(e) => {
                  setLongBreakValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className='float-right text-white bg-black px-5 rounded-md mt-4 mx-5 p-1 cursor-pointer' onClick={handleOkClick}>
          <button className=''>OK</button>
        </div>
      </div>
      {!closeModal && <Timer pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} />}
    </div>
  );
};

export default SettingsModal;
