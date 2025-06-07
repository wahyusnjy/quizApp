import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, toggleSidebar }) => {
  const menuItems = [
    { key: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { key: 'quizzes', icon: 'fas fa-clipboard-list', label: 'Quizzes' },
    { key: 'questions', icon: 'fas fa-question-circle', label: 'Questions' },
    { key: 'analytics', icon: 'fas fa-chart-bar', label: 'Analytics' },
    { key: 'users', icon: 'fas fa-users', label: 'Users' },
    { key: 'settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <aside className="bg-gray-800 shadow-lg p-4 md:p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <i className="fas fa-brain text-indigo-600 text-2xl"></i>
          <h1 className="text-xl font-bold dark:text-white">QuizMaster</h1>
        </div>
        <button onClick={toggleSidebar} className="md:hidden text-gray-500 dark:text-gray-300">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map(({ key, icon, label }) => (
            <li key={key}>
              <button
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                  activeTab === key
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <i className={icon}></i>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/42.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium dark:text-white">Sarah Johnson</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;