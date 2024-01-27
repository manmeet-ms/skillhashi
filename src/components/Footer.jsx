import React from 'react'
import { Form, Link } from "react-router-dom";

import { PlusIcon ,HomeIcon, MagnifyingGlassIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const svgIcon = "w-6 h-6"

  const bubbleStyle = "relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full px-6 py-2 text-gray-400 bg-indigo-800 bg-opacity-0 hover:bg-opacity-30 focus:bg-opacity-30 transition-all duration-500 ease-in-out"

  return (
    <main className='w-full absolute bottom-0 bg-gray-800 rounded-t-xl'>
      <div className='flex justify-between p-4'>

    <Link to="/dashboard">
        <div className="flex flex-col items-center text-gray-400 hover:text-indigo-400 focus:text-indigo-400">
                <span className={bubbleStyle}>
            <HomeIcon className={svgIcon} strokeWidth='2' />
          </span>
          <span className="mt-2">Home</span>

        </div>
    </Link>

    <Link to="/setrole">
        <div className="flex flex-col items-center text-gray-400 hover:text-indigo-400 focus:text-indigo-400">
                <span className={bubbleStyle}>
            <PlusIcon className={svgIcon} strokeWidth='2' />
          </span>
          <span className="mt-2">Skill</span>

        </div>
    </Link>

    <Link to="#">
        <div className="flex flex-col items-center text-gray-400 hover:text-indigo-400 focus:text-indigo-400">
                <span className={bubbleStyle}>
            <Cog6ToothIcon className={svgIcon} strokeWidth='2' />
          </span>
          <span className="mt-2">Settings</span>

        </div>
    </Link>


      </div>
    </main>

  )
}

export default Footer