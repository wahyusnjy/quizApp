import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardContent from './components/MainMenu/Dashboard';
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
          <Header 
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            toggleDarkMode={toggleDarkMode}
          />

          {activeTab === 'dashboard' && <DashboardContent darkMode={darkMode} />}
          {/* Tambahkan komponen lain untuk tab lainnya */}
        </main>
      </div>
    </div>
  );
};

export default App;