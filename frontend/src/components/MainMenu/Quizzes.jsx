import QuizTable from './Printilan/Quizzes/QuizTable';

const Quizzes = ({ darkMode }) => {
  

  const recentQuizzes = [
    { id: 1, title: "JavaScript Basics", participants: 245, difficulty: "Medium", status: "Active" },
    { id: 2, title: "React Fundamentals", participants: 189, difficulty: "Easy", status: "Completed" },
    { id: 3, title: "Advanced CSS", participants: 312, difficulty: "Hard", status: "Active" },
    { id: 4, title: "Node.js Quiz", participants: 167, difficulty: "Medium", status: "Draft" },
    { id: 5, title: "Laravel Quiz", participants: 210, difficulty: "Medium", status: "Active" },
    { id: 6, title: "Golang Quiz", participants: 212, difficulty: "Medium", status: "Completed" }

  ];

  return (
     <><header className={`flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4`}>
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold dark:text-white">Quizzes Overview</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
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
    <div className={`dashboard-content px-4 py-6 bg-gray-700 text-white`}>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

          {/* Quizzes */}
          <div className={`bg-gray-800 p-5 rounded-xl shadow lg:col-span-2`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold"> List Quizzes</h3>
            </div>
            <QuizTable quizzes={recentQuizzes} darkMode={darkMode} />
          </div>

        </div>
      </div></>
  );
};

export default Quizzes;
