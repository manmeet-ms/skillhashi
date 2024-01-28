/* src/routes/Register.jsx */
import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import Header from "../components/Header";
import { getAllRoles } from "../firebase";

export default function Register() {
    const [isCompany, setIsCompany] = useState(false);
    const [availableRoles, setAvailableRoles] = useState([]);

    useEffect(() => {
        getAllRoles().then(res => {
            setAvailableRoles(res);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="py-6">
                <section className="text-gray-500 bg-gray-900 body-font">
                    <div className="container w-full px-8 py-12 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2  md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-200">
                                Register
                            </h1>
                            <p className="leading-relaxed mt-2">
                            Bridge the gap between industrial demands and your skills
                            </p>
                        </div>
                        <Form className="w-full" method="POST">
                            <div className="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <div className="relative mb-4">
                                    <input
                                        placeholder="Email"
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        id="Password"
                                        name="Password"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 my-2 px-6 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {/* <label for="email" className="leading-7 text-sm text-gray-400">Password</label> */}
                                    <input
                                        placeholder="Confirm Password"
                                        type="password"
                                        id="Confirm  password"
                                        name="password"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-500 ease-in-out"
                                    />
                                </div>
                                {/* <div className="flex border-t-2 border-gray-700 border-opacity-60 mt-2 py-4">
                  <input className="w-5 h-5 mt-2 mr-4 text-pink-300 bg-pink-300 checked:bg-rose-500 cursor-pointer" type="radio" name="confirmation" id="company" />
                  Select if you are signing up as company and add roles</div> */}
                                <div className="flex flex-col border-t-2 border-gray-700 border-opacity-60 mt-2 py-4">
                                    Are you signing up as company?
                                    <div className="flex justify-start">
                                        <div className="flex items-center py-4 mr-4">
                                            <input
                                                aria-labelledby="label2"
                                                value="true"
                                                type="radio"
                                                name="isCompany"
                                                onClick={() =>
                                                    setIsCompany(true)
                                                }
                                            />
                                            <label
                                                id="label2"
                                                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-300"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <div className="flex items-center py-4 mr-4">
                                            <input
                                                defaultChecked
                                                aria-labelledby="label2"
                                                value="0"
                                                type="radio"
                                                name="isCompany"
                                                onClick={() =>
                                                    setIsCompany(false)
                                                }
                                            />
                                            <label
                                                id="label2"
                                                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-300"
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mb-4">
                                    {isCompany && (
                                        <input
                                            placeholder={
                                                isCompany
                                                    ? "Enter a role you anticipate to hire for"
                                                    : "Target Role"
                                            }
                                            type="text"
                                            id="targetRole"
                                            name="targetRole"
                                            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    )}
                                    {!isCompany && (
                                        <select
                                            id="role"
                                            name="targetRole"
                                            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-full text-base outline-none text-gray-300 py-3 my-2 px-6 leading-8 transition-colors duration-200 ease-in-out"
                                        >
                                            {availableRoles.map(role => (
                                                <option value={role} key={role}>
                                                    {role}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                {isCompany && (
                                    <textarea
                                        id="message"
                                        name="skills"
                                        placeholder="Enter comma separated values of skills associated with the role"
                                        className=" mb-6 h-32 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded-xl text-base outline-none text-gray-300 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                )}
                                <button
                                    type="submit"
                                    className="text-gray-200 bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-base"
                                >
                                    Register
                                </button>
                                <p className="text-sm text-center mt-2">
                                    Already have an account?{" "}
                                    <Link className="text-indigo-500" to="/">
                                        Login
                                    </Link>{" "}
                                    instead
                                </p>
                            </div>
                        </Form>
                    </div>
                </section>
            </div>
        </>
    );
}
