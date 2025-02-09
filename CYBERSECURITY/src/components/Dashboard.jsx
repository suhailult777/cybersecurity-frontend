import React, { useState } from "react";
import { User, Globe, BookOpen, FileText, MessageSquare, Users } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Dashboard = () => {
    const [activePage, setActivePage] = useState("dashboard"); // 🔥 State to toggle pages

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
                        className={`w-full flex items-center gap-3 p-2 sm:p-3 rounded ${activePage === "dashboard" ? "bg-[#1B2341] text-[#00E1FF]" : "text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF]"
                            }`}
                        onClick={() => setActivePage("dashboard")} // 🔥 Switch to Dashboard
                    >
                        <Globe size={18} />
                        <span className="text-sm">DASHBOARD</span>
                    </button>
                    <button
                        className={`w-full flex items-center gap-3 p-2 sm:p-3 rounded ${activePage === "courses" ? "bg-[#1B2341] text-[#00E1FF]" : "text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF]"
                            }`}
                        onClick={() => setActivePage("courses")} // 🔥 Switch to Courses
                    >
                        <BookOpen size={18} />
                        <span className="text-sm">COURSES</span>
                    </button>

                    <button className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <FileText size={18} />
                        <span className="text-sm">LEADERBOARD</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <MessageSquare size={18} />
                        <span className="text-sm">MESSAGES</span>
                        <span className="ml-auto bg-[#00E1FF] text-[#0F1631] text-xs px-2 py-0.5 rounded-full">3</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 sm:p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <Users size={18} />
                        <span className="text-sm">PROFILE</span>
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gradient-to-b from-[#0A0F1C] to-[#0F1631] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-auto">
                {activePage === "dashboard" ? (
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
                ) : (
                    <div className="text-white text-xl font-semibold flex items-center justify-center h-full">
                        📚 Welcome to Courses Page!
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className="w-16 bg-[#0F1631] border-l border-[#1B2341] flex flex-col items-center py-6 space-y-6">
                <button className="p-2 rounded-full hover:bg-[#1B2341]">
                    <User className="w-6 h-6 text-gray-400 hover:text-[#00E1FF]" />
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
