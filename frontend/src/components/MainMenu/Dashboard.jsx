import StatsCard from './Printilan/Dashboard/StatsCard';
import QuizTable from './Printilan/Dashboard/QuizTable';
import ProgressItem from './Printilan/Dashboard/ProgressItem';
import Header from './Printilan/Dashboard/Header';

const Dashboard = ({ darkMode }) => {
  const stats = [
    { title: "Total Quizzes", value: "128", icon: "fas fa-clipboard-list", change: "+12%", changePositive: true },
    { title: "Active Users", value: "2,456", icon: "fas fa-users", change: "+5%", changePositive: true },
    { title: "Avg. Score", value: "78%", icon: "fas fa-chart-line", change: "-2%", changePositive: false },
    { title: "Questions", value: "1,024", icon: "fas fa-question-circle", change: "+8%", changePositive: true }
  ];

  const recentQuizzes = [
    { id: 1, title: "JavaScript Basics", participants: 245, difficulty: "Medium", status: "Active" },
    { id: 2, title: "React Fundamentals", participants: 189, difficulty: "Easy", status: "Completed" },
    { id: 3, title: "Advanced CSS", participants: 312, difficulty: "Hard", status: "Active" },
    { id: 4, title: "Node.js Quiz", participants: 167, difficulty: "Medium", status: "Draft" }
  ];

  const userProgress = [
    { category: "JavaScript", progress: 75 },
    { category: "React", progress: 60 },
    { category: "HTML/CSS", progress: 90 },
    { category: "Algorithms", progress: 45 }
  ];

  return (
    <><header className={`flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4`}>
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold dark:text-white">Dashboard Overview</h2>
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
    </header><div className={`dashboard-content px-4 py-6 bg-gray-700 text-white`}>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} darkMode={darkMode} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Recent Quizzes */}
          <div className={`bg-gray-800 p-5 rounded-xl shadow lg:col-span-2`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Quizzes</h3>
              <button className="text-indigo-600 hover:underline text-sm">View All</button>
            </div>
            <QuizTable quizzes={recentQuizzes} darkMode={darkMode} />
          </div>

          {/* Progress + Quick Actions */}
          <div className={`bg-gray-800 p-5 rounded-xl shadow`}>
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="space-y-5 mb-6">
              {userProgress.map((item, index) => (
                <ProgressItem key={index} item={item} darkMode={darkMode} />
              ))}
            </div>

            {/* Quick Actions */}
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className={`p-3 rounded-lg flex flex-col items-center bg-gray-700 hover:bg-gray-600`}>
                <i className="fas fa-plus text-indigo-600 mb-1"></i>
                <span className="text-sm font-medium">New Quiz</span>
              </button>
              <button className={`p-3 rounded-lg flex flex-col items-center bg-gray-700 hover:bg-gray-600`}>
                <i className="fas fa-question text-indigo-600 mb-1"></i>
                <span className="text-sm font-medium">Add Question</span>
              </button>
              <button className={`p-3 rounded-lg flex flex-col items-center bg-gray-700 hover:bg-gray-600`}>
                <i className="fas fa-users text-indigo-600 mb-1"></i>
                <span className="text-sm font-medium">Invite Users</span>
              </button>
              <button className={`p-3 rounded-lg flex flex-col items-center bg-gray-700 hover:bg-gray-600`}>
                <i className="fas fa-chart-pie text-indigo-600 mb-1"></i>
                <span className="text-sm font-medium">Reports</span>
              </button>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Dashboard;
