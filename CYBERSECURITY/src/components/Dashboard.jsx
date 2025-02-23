import React, { useState, useEffect } from "react";
import { User, Globe, BookOpen, FileText, MessageSquare, Users, LogOut } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";

import CoursePage from "./courses";
import CSFCourse from "./CSFCourse";
import PEHCourse from "./PEHCourse";
import Profile from "./Profile";
import CTFPEH from "./CTFPEH";



Chart.register(...registerables);

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePage, setActivePage] = useState("dashboard");

    // Synchronize activePage with the URL
    useEffect(() => {
        // The URL is expected to be like "/dashboard" or "/dashboard/courses" or "/dashboard/csf"
        const pathParts = location.pathname.split("/");
        const page = pathParts.length > 2 ? pathParts[2] : "dashboard";
        setActivePage(page);
    }, [location.pathname]);

    // Dummy data for network traffic chart
    const data = {
        labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
        datasets: [
            {
                label: "Incoming Traffic",
                data: [200, 250, 180, 220, 300, 280, 350, 400],
                borderColor: "#00E1FF",
                backgroundColor: "rgba(0, 225, 255, 0.2)",
                fill: true,
            },
            {
                label: "Outgoing Traffic",
                data: [150, 180, 120, 200, 250, 230, 300, 320],
                borderColor: "#FF4500",
                backgroundColor: "rgba(255, 69, 0, 0.2)",
                fill: true,
            },
        ],
    };

    return (
        <div className="h-screen w-screen bg-[#0A0F1C] flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar */}
            <div className="w-full md:w-[250px] bg-[#0F1631] border-r border-[#1B2341] p-4 sm:p-6 space-y-4 sm:space-y-6 flex flex-col">
                {/* User Account Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-[#1B2341] rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-[#00E1FF]" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-200 uppercase">User Account</div>
                            <div className="text-xs text-gray-500 uppercase">Admin</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                    <button
                        className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded"
                        onClick={() => navigate("/dashboard")}
                    >
                        <Globe size={18} />
                        <span className="text-sm">DASHBOARD</span>
                    </button>
                    <button
                        className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded"
                        onClick={() => navigate("/dashboard/courses")}
                    >
                        <BookOpen size={18} />
                        <span className="text-sm">COURSES</span>
                    </button>
                    <button
                        className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded"
                        onClick={() => navigate("/dashboard/messages")}
                    >
                        <MessageSquare size={18} />
                        <span className="text-sm">MESSAGES</span>
                        <span className="ml-auto bg-[#00E1FF] text-[#0F1631] text-xs px-2 py-0.5 rounded-full">
                            3
                        </span>
                    </button>
                    <button
                        className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded"
                        onClick={() => navigate("/leaderboard")}
                    >
                        <FileText size={18} />
                        <span className="text-sm">LEADERBOARD</span>
                    </button>
                    <button
                        className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded"
                        onClick={() => navigate("/dashboard/profile")}
                    >
                        <Users size={18} />
                        <span className="text-sm">PROFILE</span>
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gradient-to-b from-[#0A0F1C] to-[#0F1631] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-auto">
                {activePage === "dashboard" && (
                    <>
                        <div className="text-white text-lg font-semibold">Threat Overview</div>
                        {/* Threat Status */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-[#1B2341] p-4 rounded-lg text-white shadow">
                                <div className="text-xl font-bold text-[#FF4500]">5</div>
                                <div className="text-sm text-gray-400">Active Threats</div>
                            </div>
                            <div className="bg-[#1B2341] p-4 rounded-lg text-white shadow">
                                <div className="text-xl font-bold text-[#FFD700]">12</div>
                                <div className="text-sm text-gray-400">Warning Alerts</div>
                            </div>
                            <div className="bg-[#1B2341] p-4 rounded-lg text-white shadow">
                                <div className="text-xl font-bold text-[#00E1FF]">98%</div>
                                <div className="text-sm text-gray-400">Firewall Efficiency</div>
                            </div>
                        </div>
                        {/* Network Traffic Graph */}
                        <div className="bg-[#1B2341] p-4 sm:p-6 mt-6 rounded-lg text-white max-w-[600px] h-[300px] mx-auto">
                            <div className="text-lg font-semibold mb-3">Network Traffic</div>
                            <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </>
                )}
                {activePage === "courses" && <CoursePage />}
                {activePage === "csf" && <CSFCourse />}
                {activePage === "peh" && <PEHCourse />}
                {activePage === "profile" && <Profile />}
                {activePage === "ctfpeh" && <CTFPEH />}
                {activePage === "messages" && (
                    <div className="h-full flex flex-col">
                        <div className="text-white text-lg font-semibold mb-4">Messages</div>
                        {/* Message List */}
                        <div className="flex-1 bg-[#1B2341] p-4 rounded-lg overflow-auto">
                            <div className="mb-4">
                                <div className="text-[#00E1FF] font-bold">Alice:</div>
                                <div className="text-white">Hi, how are you?</div>
                            </div>
                            <div className="mb-4 text-right">
                                <div className="text-[#FFD700] font-bold">You:</div>
                                <div className="text-white">I am good, thanks!</div>
                            </div>
                            <div className="mb-4">
                                <div className="text-[#00E1FF] font-bold">Bob:</div>
                                <div className="text-white">Do not forget the meeting tomorrow.</div>
                            </div>
                            {/* Add more messages */}
                        </div>
                        {/* Message Input */}
                        <div className="mt-4 flex">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 p-2 rounded-l-lg bg-[#0F1631] text-white border border-[#1B2341] focus:outline-none"
                            />
                            <button className="bg-[#00E1FF] text-[#d7d9e4] p-2 rounded-r-lg">Send</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col w-35 h-full bg-[#0F1631] border-l border-[#1B2341] p-4 items-start justify-start space-y-4">
                {/* Logout Button */}
                <button
                    className="flex items-center gap-2 bg-[#2A3358] text-white py-2 px-3 rounded-md hover:bg-[#343E66]"
                    onClick={() => {
                        localStorage.removeItem("user");
                        navigate("/");
                    }}
                >
                    <LogOut className="w-4.5 h-5 text-white" />
                    <span>Logout</span>
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
