import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "./Footer";

const CTFPEH = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0d24] p-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center text-sm text-gray-400 mb-6">
                <span
                    className="hover:text-[#00E1FF] cursor-pointer"
                    onClick={() => navigate("/dashboard/courses")}
                >
                    Courses
                </span>
                <span className="mx-2">/</span>
                <span
                    className="hover:text-[#00E1FF] cursor-pointer"
                    onClick={() => navigate("/dashboard/peh")}
                >
                    PEH Course
                </span>
                <span className="mx-2">/</span>
                <span className="text-[#00E1FF]">CTF-PEH</span>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate("/dashboard/courses")}
                className="flex items-center text-[#00E1FF] hover:text-[#00cce5] mb-6"
            >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Courses</span>
            </button>

            {/* Main Title */}
            <div className="mb-12">
                <h2 className="text-3xl font-arial text-white">CTF-PROFESSIONAL ETHICAL HACKING(PEH)</h2>
            </div>

            {/* Machines Grid*/}
            <div className="max-w-2xl ml-auto space-y-4">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-[#141837] rounded-lg p-4 flex justify-between items-center hover:bg-[#1c2144] transition-colors"
                    >
                        <span className="text-gray-300 text-xl">Machine {i + 1}</span>
                        {i < 2 ? (
                            <button className="bg-[#1c2144] text-gray-300 px-6 py-2 rounded-lg hover:bg-[#252b4d] transition-colors">
                                Go to Challenges
                            </button>
                        ) : (
                            <span className="text-gray-500 px-6 py-2">
                                LOCKED
                            </span>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default CTFPEH;
