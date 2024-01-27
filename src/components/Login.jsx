import React from 'react'

const Login = () => {
  return (
    <div className='py-24' >
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-8 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2  md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-white">Log into your account</h1>
      <p className="leading-relaxed mt-4">Lorem ipsum amet consectetur adipisicing elit.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 rounded-lg py-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      {/* <h2 className="text-white text-lg font-medium title-font mb-5"></h2> */}
      <div className="relative mb-4">
        <input placeholder='Email' type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-100 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        {/* <label for="email" className="leading-7 text-sm text-gray-400">Password</label> */}
        <input placeholder='Password' type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-100 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-5 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg font-medium ">Submit</button>
      <p className="text-xs text-center mt-3">Or signup to register as a new user.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login