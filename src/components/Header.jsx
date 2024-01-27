import React from 'react'

import { Link } from "react-router-dom";

import '../assets/style.css'
import {PresentationChartBarIcon} from '@heroicons/react/24/outline'
const Header = (props) => {
  return (
    <div>
        <header className='py-6 px-4 bg-gray-800 bg-opacity-40 rounded-b-xl text-gray-400'>
        <h1 className="title-font flex text-xl text-gray-200">

        {props.icon} 
        <Link to="#">{props.name}</Link> </h1>
        </header>
    </div>
  )
}

Header.defaultProps={
  name:'SkillHashi',
  icon:<PresentationChartBarIcon className='mr-2 mt-1 w-6 h-6 text-indigo-500' strokeWidth='2' /> 
}
export default Header
