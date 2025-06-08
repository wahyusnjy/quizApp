const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold dark:text-white">Dashboard Overview</h2>
      </div>
      
      <div className="flex items-center space-x-4">
          <div className="relative">
              <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
          </div>
          <div className="relative">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 relative">
                  <i className="fas fa-bell"></i>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
          </div>
      </div>
  </header>
  );
};

export default Header;
