import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/GlobeLogin";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}
