import React, { useState, createContext } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState('25');
  const [shortBreak, setShortBreak] = useState('5');
  const [longBreak, setLongBreak] = useState('15');
  const [selectedOption, setSelectedOption] = useState("Pomodoro");

  return <SettingsContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedOption, setSelectedOption }}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
