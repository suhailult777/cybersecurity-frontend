import React from 'react';

const CSFCourse = () => {
    return (
        <div className="p-6 text-white">
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