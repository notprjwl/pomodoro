import React, { useState, useEffect } from "react";
import SettingsModal from "./SettingsModal";

const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  
  const handleSettingsClick = () => {
    setIsModal(true)
    console.log('modal is open')
  }

  const isModalClose = () => {
    setIsModal(false)
  }


  return (
    <div className='container text-text bg-background font-inconsolata max-w-[600px] mx-auto my-0 flex items-center p-3 pt-2 justify-between'>
      <div>
        <h1 className='text-2xl'>Pomodoro</h1>
      </div>
      <div className='outline outline-1 outline-outline p-1 px-3 rounded-lg hover:text-[#e1e1e1] hover:bg-hoverBg active:bg-blue-900'>
        <button className='text-[1rem]' onClick={handleSettingsClick}>Settings</button>
      </div>
        {isModal && <SettingsModal closeModal={isModalClose} />}
    </div>
  );
};

export default Navbar;
