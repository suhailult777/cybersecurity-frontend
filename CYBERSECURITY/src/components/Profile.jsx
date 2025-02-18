import React from 'react';
import { User } from 'lucide-react';

const Profile = () => {
    return (
        <div className="p-3 bg-[#0a0d24] overflow-hidden">
            <h1 className="text-4xl text-white mb-4">Profile</h1>

            {/* Remove `h-[calc(100%-5rem)] overflow-y-auto` so the grid auto-sizes */}
            <div className="grid grid-cols-3 gap-6">
                {/* Profile Details Form */}
                <div className="col-span-2 bg-[#141837] rounded-lg shadow-lg">
                    <div className="p-4">
                        <h2 className="text-xl text-white mb-4">Profile Details</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                        placeholder="User"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                        placeholder="Account"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                    placeholder="user@cybersaurus.in"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Address</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">City</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">State</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#1c2144] text-white rounded-lg px-3 py-1.5 border border-gray-700"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                            >
                                Submit Changes
                            </button>
                        </form>
                    </div>
                </div>

                {/* User Card */}
                <div className="text-center">
                    <div className="bg-[#141837] rounded-lg shadow-lg h-fit">
                        <div className="p-4">
                            <User size={64} className="mx-auto mb-3 text-white" />
                            <h2 className="text-xl text-white mb-2">User Account</h2>
                            <span className="inline-block bg-[#1c2144] text-cyan-400 px-4 py-1 rounded-full text-sm mb-3">
                                Newbie
                            </span>
                            <div className="space-y-2">
                                <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                                    Add Photo
                                </button>
                                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
