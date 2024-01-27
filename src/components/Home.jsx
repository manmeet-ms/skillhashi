import React from 'react'
import CompanyRecom from './CompanyRecom'
import Footer from './Footer'
import { ClockIcon } from "@heroicons/react/24/outline"
const Home = () => {
  let d = 'Wed, 27 January 2024';
  return (
    <>
      <main className='flex flex-col space-y-12'>
        <section className="flex flex-col">
          <div className="mb-3">
            <span className='flex text-gray-400' >
              <ClockIcon className='w-4 h-4' />
              {d}</span>
            <h1 className="title-font font-medium text-3xl text-white ">Your Skills</h1>
          </div>
          <div className="w-100 h-48 bg-gray-700 rounded-xl"></div>
        </section>

        <section>

          <h1 className="title-font font-medium text-3xl text-white ">Company Recoms</h1>
          <CompanyRecom />
          <CompanyRecom />
          <CompanyRecom />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Home