import React from 'react';

const PEHCourse = () => {
    return (
        <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">PROFESSIONAL ETHICAL HACKING (PEH)</h1>

            {/* Course Description */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">COURSE DESCRIPTION</h2>
                <p className="text-gray-300">
                    The Professional Ethical Hacking course is designed to provide in-depth knowledge and practical skills in ethical hacking and penetration testing. This course is ideal for individuals aiming to pursue a career in cybersecurity and ethical hacking.
                </p>
                <p className="text-gray-300 mt-2">
                    The course covers various topics, including network security, vulnerability assessment, and exploitation techniques. Participants will learn how to identify and mitigate security vulnerabilities in systems and networks.
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

export default PEHCourse;