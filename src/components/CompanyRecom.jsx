import React from 'react'
import { ChevronRight } from '@heroicons/react/24/outline'
const CompanyRecom = (props) => {
  return (
    <>

      <div className="w-[25rem] my-2">
        <div
          className="relative flex items-center gap-4 py-3 pl-4 pr-8 bg-gray-800 shadow-lg rounded-xl shadow-teal-900/5">
          <span
            className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-green-500/10 p-3 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>

          </span>
          <div className="flex flex-col gap-1">
            <h6
              className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-200">
              Company Name
            </h6>
            <span className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 text-gray-500" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-500">Stipend</p>
            </span>
          </div>
          <ChevronRight/>
        </div>

      </div>
    </>
  )
}
export default CompanyRecom