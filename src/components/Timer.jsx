import React from 'react'

const Timer = () => {
  return (
    <div className='text-text max-w-[500px] mx-auto p-5 font-inconsolata'>
        <div className='container bg-componentsbg outline outline-1 outline-outline p-5 mx-auto mt-[7rem] h-[18rem] rounded-md'>
        <div className='flex items-center justify-center h-10 gap-2'>
            <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button className='p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg'>
                Pomodoro
            </button>
            </div>
            <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button className='p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg'>
                Short Break
            </button>
            </div>
            <div className='active:mt-2 transition-all duration-100 ease-in-out'>
            <button className='p-1 px-2 rounded-md hover:text-[#e1e1e1] hover:bg-hoverBg'>
                Long Break
            </button>
            </div>
        </div>
        <div className='text-9xl sm:text-8xl text-center flex items-center justify-center h-[10rem]'>
            10:00
        </div>
        <div className='flex items-center justify-center mx-auto h-10 '>
            <button className='text-2xl px-7 py-1 rounded-md active:mt-1 bg-text text-background font-bold border-b-4 border-b-[#c7c7c7] active:border-0'>
                START
            </button>
        </div>
        </div>
    </div>
  )
}

export default Timer