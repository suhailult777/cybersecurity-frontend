import React from "react";
import Footer from "./Footer";

const Leaderboard = () => {
    // Dummy leaderboard data
    const leaderboardData = [
        { rank: 1, name: "Alice Johnson", score: 1500 },
        { rank: 2, name: "Bob Smith", score: 1350 },
        { rank: 3, name: "Charlie Brown", score: 1200 },
        { rank: 4, name: "David Williams", score: 1100 },
        { rank: 5, name: "Emma Davis", score: 950 },
    ];

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0A0F1C] text-white">
            <h1 className="text-2xl font-semibold mb-6">🏆 Leaderboard</h1>
            <div className="w-full max-w-md bg-[#1B2341] p-6 rounded-lg shadow-lg">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[#00E1FF] border-b border-gray-600">
                            <th className="p-2">Rank</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((player, index) => (
                            <tr key={index} className="border-b border-gray-700">
                                <td className="p-2 text-[#FFD700] font-bold">#{player.rank}</td>
                                <td className="p-2">{player.name}</td>
                                <td className="p-2 text-[#00E1FF]">{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Leaderboard;
