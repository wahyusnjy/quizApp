import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import DashboardContent from './components/MainMenu/Dashboard';
import Quizzes from './components/MainMenu/Quizzes';
import Questions from './components/MainMenu/Questions';
import Analytics from './components/MainMenu/Analytics';
import Users from './components/MainMenu/Users';
import Settings from './components/MainMenu/Settings';
import './App.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`dark`}>
      <div className="dashboard-grid">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
        />
        <main className={`p-4 md:p-6 overflow-auto bg-gray-700`}>
  
          {activeTab === 'dashboard' && <DashboardContent darkMode={darkMode} />}
          {activeTab === 'quizzes' && <Quizzes darkMode={darkMode} />}
          {activeTab === 'questions' && <Questions darkMode={darkMode} />}
          {activeTab === 'analytics' && <Analytics darkMode={darkMode} />}
          {activeTab === 'users' && <Users darkMode={darkMode} />}
          {activeTab === 'settings' && <Settings darkMode={darkMode} />}
          {/* Tambahkan komponen lain untuk tab lainnya */}
        </main>
      </div>
    </div>
  );
};

export default App;