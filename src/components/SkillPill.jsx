import React from 'react'
import { Link } from "react-router-dom";

const SkillPill = (props) => {
    return (
        <div>
            <button className="text-gray-100 bg-indigo-500/20 border border-indigo-500 py-3 px-6 m-2 focus:outline-none hover:bg-indigo-600/60 rounded-xl text-base font-medium"> <Link to={props.link}>{props.name}</Link> </button>
        </div>
    )
}

SkillPill.defaultProps={
    name:'Skill #',
    link:'/setrole',
}
export default SkillPill