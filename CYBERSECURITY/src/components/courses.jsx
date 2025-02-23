import React from 'react';
import { FolderIcon, Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const CoursePage = () => {
    const navigate = useNavigate();

    const courses = [
        { title: 'Cyber Security Foundation (CSF)', id: 'csf' },
        { title: 'Professional Ethical Hacking (PEH)', id: 'peh' },
        { title: 'Web Application Pentesting (WAP)', id: 'wap' },
        { title: 'Advanced IoT Security', id: 'iot-security' },
        { title: 'Professional Cyber Forensics', id: 'cyber-forensics' }
    ];

    // Handler to navigate to the specific course route
    const handleCourseClick = (courseId) => {
        navigate(`/dashboard/${courseId}`);
    };

    return (
        <div className="h-full bg-gradient-to-b from-[#0A0F1C] to-[#0F1631]">
            {/* Top Search Bar */}
            <div className="border-b border-[#1B2341] p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button className="bg-teal-500 text-white px-3 py-1 rounded text-sm">ONLINE</button>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="bg-[#1B2341] rounded px-4 py-1 w-48 text-sm text-gray-200"
                        />
                        <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-400" />
                    </div>
                    <Bell className="h-5 w-5 text-gray-400" />
                </div>
            </div>

            {/* Course Grid */}
            <main className="p-8">
                <h1 className="text-xl font-medium text-gray-300 mb-8 tracking-wide">COURSES</h1>
                <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#1B2341] p-4 rounded-lg hover:bg-[#232d4d] transition-colors cursor-pointer"
                            onClick={() => handleCourseClick(course.id)}
                        >
                            <FolderIcon className="h-12 w-12 text-teal-500 mb-4" />
                            <h3 className="text-sm">{course.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col space-y-4 lg:hidden">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#1B2341] p-6 rounded-lg hover:bg-[#232d4d] transition-colors cursor-pointer flex items-center space-x-4"
                            onClick={() => handleCourseClick(course.id)}
                        >
                            <FolderIcon className="h-12 w-12 text-teal-500 flex-shrink-0" />
                            <h3 className="text-lg text-gray-200">{course.title}</h3>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

CoursePage.propTypes = {
    // No props needed now since we're using navigation.
};

export default CoursePage;
