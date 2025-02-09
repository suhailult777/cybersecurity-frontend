import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/GlobeLogin";
import Dashboard from "./components/Dashboard";
// import Courses from "./components/Courses/courses";
// import CSFCourse from "./components/Courses/CSFCourse";
// import PEHCourse from "./components/Courses/PEHCourse";
import Leaderboard from "./components/Leaderboard"; // ✅ New Leaderboard Page

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/courses/csf" element={<CSFCourse />} />
        <Route path="/courses/peh" element={<PEHCourse />} /> */}
        <Route path="/leaderboard" element={<Leaderboard />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}
