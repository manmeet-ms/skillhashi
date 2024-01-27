import React from 'react'
import {CurrencyRupeeIcon, ChevronRightIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'
const CompanyRecom = (props) => {
  return (
    <>

      <div className="w-[25rem] my-2">
        <div className="relative flex justify-around items-center gap-4 py-3 pl-4 pr-8 bg-gray-800 shadow-lg rounded-xl shadow-teal-900/5">
          <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-teal-500/10 p-3 text-teal-500">
            <CubeTransparentIcon className='w-4 h-4' />
          </span>

          {/* name and stipend */}
          <div className="flex flex-col gap-1">
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-200">
              {props.name}
            </h6>
            <span className="inline-flex text-gray-400">
             <CurrencyRupeeIcon className='w-4 h-4 mr-1' />
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-500">{props.stipend}</p>
            </span>
          </div>
          <span className="flex text-teal-600">
View
          <ChevronRightIcon className='w-4 h-4' />
          </span>
          {/* <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-teal-500/10 p-3 text-teal-500">
          </span> */}

        </div>

      </div>
    </>
  )
}

CompanyRecom.defaultProps={
  stipend:'Stipend',
  name:'Company Name',
}

export default CompanyRecom
