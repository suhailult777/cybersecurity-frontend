import React from 'react';
import { FolderIcon, Search, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
    const navigate = useNavigate();
    const courses = [
        { title: 'Cyber Security Foundation (CSF)', id: 1, route: '/courses/csf' },
        { title: 'Professional Ethical Hacking (PEH)', id: 2, route: '/courses/peh' },
        { title: 'Web Application Pentesting (WAP)', id: 3, route: '/courses/wap' },
        { title: 'Advanced IoT Security', id: 4, route: '/courses/iot-security' },
        { title: 'Professional Cyber Forensics', id: 5, route: '/courses/cyber-forensics' }
    ];

    // Function to handle course card click
    const handleCourseClick = (route) => {
        navigate(route);
    };

    return (
        <div className="min-h-screen w-screen bg-gray-900 text-gray-100">
            {/* Top Navigation */}
            <nav className="border-b border-gray-800 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button className="bg-teal-500 text-white px-3 py-1 rounded text-sm">ONLINE</button>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="bg-gray-800 rounded px-4 py-1 w-48 text-sm"
                        />
                        <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-400" />
                    </div>
                    <Bell className="h-5 w-5 text-gray-400" />
                    <div className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-gray-400" />
                        <span className="text-sm">User Account ▾</span>
                    </div>
                </div>
            </nav>

            {/* Course Grid */}
            <main className="p-8">
                <h1 className="text-xl font-medium text-gray-300 mb-8 tracking-wide">COURSES</h1>
                <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => handleCourseClick(course.route)}
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
                            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer flex items-center space-x-4"
                            onClick={() => handleCourseClick(course.route)}
                        >
                            <FolderIcon className="h-12 w-12 text-teal-500 flex-shrink-0" />
                            <h3 className="text-lg">{course.title}</h3>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CoursePage;
