import React, { useState } from "react";

const SettingsModal = ({ closeModal }) => {
  const [someSetting, setSomeSetting] = useState("default value");

  const handleSettingChange = (newValue) => {
    setSomeSetting(newValue);
  };

  const handleSaveClick = () => {
    console.log("Settings saved:", someSetting);
    closeModal();
  };

  const handleCancelClick = () => {
    closeModal();
  };

  return (
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='bg-white p-4 px-0 rounded-lg'>
          <div className='flex justify-center w-[22rem] text-center border-b pb-2'>
            Settings
            <div className='absolute pl-[310px]'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SettingsModal;
