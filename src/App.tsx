import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ResourcesPage from './pages/ResourcesPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/resources/:category" element={<ResourcesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
