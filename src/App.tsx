import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetail from './pages/ProgramDetail';
import StudentDetail from './pages/StudentDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentYear from './pages/StudentYear';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="programs/:programId" element={<ProgramDetail />} />
          <Route path="programs/:programId/year/:year" element={<ProgramDetail />} />
          <Route path="programs/:programId/students/:studentId" element={<StudentDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;