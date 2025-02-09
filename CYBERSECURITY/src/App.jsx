// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/GlobeLogin'
import Dashboard from './components/Dashboard'
// import CSFCourse from './components/Courses/CSFCourse'
// import PEHCourse from './components/Courses/PEHCourse'
// import Achievements from './components/Achievements'
// import Profile from './components/Profile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/courses/csf" element={<CSFCourse />} />
        <Route path="/courses/peh" element={<PEHCourse />} /> */}
        {/* <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />  */}
      </Routes>
    </Router>
  )
}