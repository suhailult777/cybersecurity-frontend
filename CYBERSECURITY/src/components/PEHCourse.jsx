import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "./Footer";

const PEHCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle back navigation
    const handleBack = () => {
        navigate("/dashboard/courses"); // Redirect to main course page
    };

    // Handle CTF-PEH navigation
    const handleCTFPEH = () => {
        navigate("/dashboard/ctfpeh");
    };

    return (
        <div className="p-6 text-white">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center text-sm text-gray-400 mb-6">
                <span
                    className="hover:text-[#00E1FF] cursor-pointer"
                    onClick={() => navigate("/dashboard/courses")}
                >
                    Courses
                </span>
                <span className="mx-2">/</span>
                <span className="text-[#00E1FF]">PEH Course</span>
                {location.pathname.includes("videos") && (
                    <>
                        <span className="mx-2">/</span>
                        <span className="text-[#00E1FF]">Videos</span>
                    </>
                )}
            </div>

            {/* Back Button */}
            <button
                onClick={handleBack}
                className="flex items-center text-[#00E1FF] hover:text-[#00cce5] mb-6"
            >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Courses</span>
            </button>

            {/* Course Title */}
            <h1 className="text-3xl font-bold mb-6">
                PENETRATION TESTING &amp; ETHICAL HACKING (PEH)
            </h1>

            {/* Course Description */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">COURSE DESCRIPTION</h2>
                <p className="text-gray-300">
                    Cybersecurity Foundation course serves as a foundational mapping stone for
                    individuals looking to establish a solid understanding of the essential
                    principles and practices in the dynamic field of cybersecurity.
                </p>
                <p className="text-gray-300 mt-2">
                    This course typically covers a range of fundamental concepts, beginning with
                    an introduction to the overarching importance of cybersecurity in today’s
                    interconnected digital landscape. The course often explores the principles of
                    confidentiality, integrity, and availability, emphasizing the critical role
                    these principles play in designing secure systems.
                </p>
            </section>

            {/* Videos, CTF-PEH, & Assessment Side by Side */}
            <section className="mb-8">
                {/* 3 columns: Videos, CTF-PEH, Assessment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Videos */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">VIDEOS</h2>
                        <div className="flex items-center gap-2 mb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="text-[#00E1FF]"
                            >
                                <path d="M45 8L18.044 8.006c-.279-.101-.855-1.02-1.165-1.514C16.112 5.268 15.317 4 14 4H5C3.346 4 2 5.346 2 7v6h1 44 1v-2C48 9.346 46.654 8 45 8zM48 43V16c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v27c0 1.657 1.343 3 3 3h40C46.657 46 48 44.657 48 43z"></path>
                            </svg>
                        </div>
                        {/* Additional content for Videos can go here */}
                    </div>

                    {/* CTF-PEH (NEW Folder in the Middle) */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">CTF-PEH</h2>
                        <div
                            className="flex items-center gap-2 mb-2 text-gray-300 hover:text-[#00E1FF] cursor-pointer"
                            onClick={handleCTFPEH}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="text-[#00E1FF]"
                            >
                                <path d="M45 8L18.044 8.006c-.279-.101-.855-1.02-1.165-1.514C16.112 5.268 15.317 4 14 4H5C3.346 4 2 5.346 2 7v6h1 44 1v-2C48 9.346 46.654 8 45 8zM48 43V16c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v27c0 1.657 1.343 3 3 3h40C46.657 46 48 44.657 48 43z"></path>
                            </svg>
                            <span>CTF-PEH</span>
                        </div>
                        {/* Additional content for CTF-PEH can go here */}
                    </div>

                    {/* Assessment */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">ASSESSMENT</h2>
                        <div className="flex items-center gap-2 mb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="text-[#00E1FF]"
                            >
                                <path d="M45 8L18.044 8.006c-.279-.101-.855-1.02-1.165-1.514C16.112 5.268 15.317 4 14 4H5C3.346 4 2 5.346 2 7v6h1 44 1v-2C48 9.346 46.654 8 45 8zM48 43V16c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v27c0 1.657 1.343 3 3 3h40C46.657 46 48 44.657 48 43z"></path>
                            </svg>
                        </div>
                        {/* Additional content for Assessment can go here */}
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">PROGRESS</h2>
                <div className="bg-[#1B2341] p-4 rounded-lg">
                    {/* Donut Chart */}
                    <div className="flex items-center justify-center">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                                className="text-gray-700"
                                strokeWidth="10"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                            />
                            <circle
                                className="text-[#00E1FF]"
                                strokeWidth="10"
                                strokeDasharray="283"
                                strokeDashoffset="283"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                                transform="rotate(-90 50 50)"
                            />
                            {/* Percentage Text in Center */}
                            <text
                                x="50"
                                y="50"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className="text-[#00E1FF] text-xl font-bold"
                            >
                                0%
                            </text>
                        </svg>
                    </div>

                    {/* Stats below the donut chart */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="text-center">
                            <div className="text-xl text-[#00E1FF]">0%</div>
                            <div className="text-sm text-gray-400">COMPLETE</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl text-[#00E1FF]">0/0</div>
                            <div className="text-sm text-gray-400">SCORE</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PEHCourse;
