import { useEffect, useState } from "react";
import CompanyRecom from "../components/CompanyRecom";
import { logout, getUserSkills } from "../firebase";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SkillPill from "../components/SkillPill";


import {
    PresentationChartBarIcon,
    // ClockIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
// import Header from "../components/Header";

const Home = () => {
    const [skills, setSkills] = useState([]);
    const { user, loading } = useAuth();
    useEffect(() => {
        if (!loading) {
            getUserSkills(user.email).then(res => {
                setSkills(res.skills);
            });
        }
    }, [loading, user]);

    return (
        <>
            <main className="flex flex-col space-y-6 px-2">
                <header className="flex justify-between py-6  bg-gray-800 bg-opacity-40 rounded-b-xl text-gray-400">
                    <h1 className="title-font flex text-xl text-gray-200">
                        <PresentationChartBarIcon
                            className="mr-2 mt-1 w-6 h-6 text-indigo-500"
                            strokeWidth="2"
                        />
                        <Link to="#">SkillHashi</Link>{" "}
                    </h1>
                    <button
                        className="inline-flex justify-end text-indigo-500 font-medium "
                        onClick={logout}
                    >
                        Logout
                        <ArrowLongRightIcon
                            strokeWidth="2.5"
                            className="w-5 h-5 ml-2"
                        />
                    </button>
                </header>
                <section className="flex flex-col ">
                    {/* <button className="text-indigo-500 bg-indigo-500 border-0 py-5 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg font-medium " onClick={logout}>Logout</button> */}
                    <div className="mb-3">
                        {/* <span className="flex text-gray-500 text-xs">
                            <ClockIcon className="w-3 h-3 -mb-1 mr-1" />
                            {d}
                        </span> */}
                        <h1 className="title-font font-medium text-2xl text-white">
                            Your Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-start items-center w-100 h-48 bg-gray-800/20 rounded-xl">
                        {skills &&
                            skills.map(role => (
                                <SkillPill name={role} key={role} />
                            ))}

                    </div>
                </section>
                <hr className="opacity-30" />
                <section className="">
                    <h1 className="title-font font-medium text-2xl text-white my-2">
                        Company Recoms
                    </h1>
                    <CompanyRecom stipend="12,000" name="Tata Indicom" />
                    <CompanyRecom stipend="20,000" name="Aircel" />
                    <CompanyRecom stipend="7,000" name="BSNL" />
                </section>
                <Footer />
            </main>
        </>
    );
};

export default Home;
