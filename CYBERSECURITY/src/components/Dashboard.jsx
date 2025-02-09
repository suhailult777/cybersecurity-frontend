import React from 'react';
import { User, Globe, BookOpen, FileText, MessageSquare, Users } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] flex">
            {/* Sidebar */}
            <div className="w-[250px] bg-[#0F1631] border-r border-[#1B2341] p-6 space-y-8">
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
                    <div className="flex gap-8 mt-4">
                        <div className="text-center">
                            <div className="text-[#00E1FF] text-lg font-medium">1</div>
                            <div className="text-xs text-gray-500 uppercase">First Name</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#00E1FF] text-lg font-medium">30</div>
                            <div className="text-xs text-gray-500 uppercase">Score</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                    <button className="w-full flex items-center gap-3 p-3 rounded bg-[#1B2341] text-[#00E1FF]">
                        <Globe size={18} />
                        <span className="text-sm">DASHBOARD</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <BookOpen size={18} />
                        <span className="text-sm">COURSES</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <FileText size={18} />
                        <span className="text-sm">LEADERBOARD</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <MessageSquare size={18} />
                        <span className="text-sm">MESSAGES</span>
                        <span className="ml-auto bg-[#00E1FF] text-[#0F1631] text-xs px-2 py-0.5 rounded-full">3</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-[#1B2341] hover:text-[#00E1FF] rounded">
                        <Users size={18} />
                        <span className="text-sm">PROFILE</span>
                    </button>
                </nav>
            </div>

            {/* Right Sidebar */}
            <div className="w-16 bg-[#0F1631] border-l border-[#1B2341] flex flex-col items-center py-4 space-y-4">
                <button className="p-2 rounded-full hover:bg-[#1B2341] group">
                    <User className="w-5 h-5 text-gray-400 group-hover:text-[#00E1FF]" />
                </button>
            </div>
        </div>
    );
};

export default Dashboard;