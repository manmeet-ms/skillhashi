import React from 'react'
import { Form, Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const SetRole = () => {
    let searchIco=<MagnifyingGlassIcon className='w-4 h-4'/>
    return (
        <>
            <Header name="Add Skills" icon={<Link to="/dashboard"><ChevronLeftIcon strokeWidth='2.5' className='w-5 h-5 mr-2 mt-1' /></Link>} />
            <div className='' >
                <section className="text-gray-500 bg-gray-900 body-font px-2">
                    <div className="container w-full px-2 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2  md:pr-16 lg:pr-0 pr-0">
                            {/* <h1 className="title-font font-medium text-3xl text-gray-200">Add skills</h1> */}
                            {/* <p className="leading-relaxed mt-2">Lorem ipsum amet consectetur elit.</p> */}
                        </div>
                        <Form className="w-full" method="POST">
                            <div className="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                {/* <h2 className="text-gray-200 text-lg font-medium title-font mb-5"></h2> */}
                                <div className="flex space-x-2 mb-4">
                                <input placeholder="Search" type="text" id="search" name="search" className="w-64 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-100 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out" />
                                <button className="text-gray-200 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-base">Search</button>
                                </div>
                            </div>

                        </Form>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default SetRole