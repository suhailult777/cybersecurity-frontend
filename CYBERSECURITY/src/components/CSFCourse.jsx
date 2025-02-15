import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CSFCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle back navigation
    const handleBack = () => {
        navigate("/dashboard/courses"); // Redirect to main course page
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
                <span className="text-[#00E1FF]">CSF Course</span>
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
            <h1 className="text-3xl font-bold mb-6">CYBER SECURITY FOUNDATION (CSF)</h1>

            {/* Course Description */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">COURSE DESCRIPTION</h2>
                <p className="text-gray-300">
                    Cybersecurity Foundation course serves as a foundational mapping stone for individuals looking to establish a solid understanding of the essential principles and practices in the dynamic field of cybersecurity.
                </p>
                <p className="text-gray-300 mt-2">
                    This course typically covers a range of fundamental concepts, beginning with an introduction to the overarching importance of cybersecurity in today’s interconnected digital landscape. The course often explores the principles of confidentiality, integrity, and availability, emphasizing the critical role these principles play in designing secure systems.
                </p>
            </section>

            {/* Videos Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">VIDEOS</h2>
                <div className="bg-[#1B2341] p-4 rounded-lg">
                    <p className="text-gray-300">Video content will be available here.</p>
                </div>
            </section>

            {/* Assessment Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">ASSESSMENT</h2>
                <div className="bg-[#1B2341] p-4 rounded-lg">
                    <p className="text-gray-300">Assessment details will be available here.</p>
                </div>
            </section>

            {/* Progress Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">PROGRESS</h2>
                <div className="bg-[#1B2341] p-4 rounded-lg">
                    <p className="text-gray-300">0%</p>
                    <p className="text-gray-300">0/0</p>
                </div>
            </section>
        </div>
    );
};

export default CSFCourse;