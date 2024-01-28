import React from 'react'
import { CurrencyRupeeIcon, ChevronRightIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'
const CompanyRecom = (props) => {
  return (
    <>

      <div className="w-[25rem] py-3 border-b border-gray-700 border-opacity-40">
        <div className="relative flex justify-between items-center gap-4 py-3 pl-2 pr-6 rounded-xl shadow-indigo-900/5">
          <div className="flex space-x-4">

            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-indigo-500/10 p-4 text-indigo-500">
              <CubeTransparentIcon className='w-5 h-5' />
            </span>

            {/* name and stipend */}
            <div className="flex flex-col gap-1">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-200">
                {props.name}
                
              </h6>
              <span className="inline-flex text-gray-400">
                <CurrencyRupeeIcon className='w-4 h-4 mr-1 mt-1' />
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-500">{props.stipend}</p>
              </span>
            </div>
          </div>
          <span className="flex font-medium text-indigo-600">
            View
            <ChevronRightIcon strokeWidth='2' className='w-4 h-4 mt-1 ml-1' />
          </span>
          {/* <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-indigo-500/10 p-3 text-indigo-500">
          </span> */}

        </div>

      </div>
    </>
  )
}

CompanyRecom.defaultProps = {
  stipend: 'Stipend',
  name: 'Company Name',
}

export default CompanyRecom
