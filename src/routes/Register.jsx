/* src/routes/Register.jsx */
import { Form, Link } from "react-router-dom";
import Header from '../components/Header'

export default function Register() {
  return (
    <>
      <Header />
      <div className='py-6'>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container w-full px-8 py-12 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2  md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-200">Register</h1>
              <p className="leading-relaxed mt-2">Lorem ipsum amet consectetur elit.</p>
            </div>
            <Form className="w-full" method="POST">
              <div className="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <div className="relative mb-4">
                  <input placeholder='Email' type="text" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out" />
                  <input placeholder='Password' type="password" id="Password" name="Password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 my-2 px-6 leading-8 transition-colors duration-200 ease-in-out" />
                  {/* <label for="email" className="leading-7 text-sm text-gray-400">Password</label> */}
                  <input placeholder='Confirm Password' type="password" id="Confirm  password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-500 ease-in-out" />
                </div>
                {/* <div className="flex border-t-2 border-gray-700 border-opacity-60 mt-2 py-4">
                  <input className="w-5 h-5 mt-2 mr-4 text-pink-300 bg-pink-300 checked:bg-rose-500 cursor-pointer" type="radio" name="confirmation" id="company" />
                  Select if you are signing up as company and add roles</div> */}
<div className="flex flex-col border-t-2 border-gray-700 border-opacity-60 mt-2 py-4">
Are you signing up as company?
                <div className="flex justify-start">
                <div class="flex items-center py-4 mr-4">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label2" value="1" type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-indigo-600 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Yes</label>
                </div>
                <div class="flex items-center py-4 mr-4">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label2" value="0" type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-indigo-600 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">No</label>
                </div>

                </div>
</div>

                <textarea id="message" name="message" placeholder="Enter comma separated values" className=" mb-6 h-32 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-xl text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                <button type="submit" className="text-gray-200 bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-base">Register</button>
                <p className="text-sm text-center mt-2">Already have an account? <Link className="text-indigo-500" to="/">Login</Link> instead</p>
              </div>

            </Form>
          </div>
        </section>
      </div>

    </>

  );
}
