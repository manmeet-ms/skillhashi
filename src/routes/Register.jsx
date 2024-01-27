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
