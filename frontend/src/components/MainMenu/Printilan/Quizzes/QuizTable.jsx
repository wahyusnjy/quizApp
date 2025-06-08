import { useState } from 'react';

const QuizTable = ({ quizzes, darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(quizzes.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentQuizzes = quizzes.slice(startIdx, startIdx + itemsPerPage);

  const getBadgeClass = (value, type) => {
    const map = {
      difficulty: {
        Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      },
      status: {
        Active: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        Completed: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        Draft: 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200',
      }
    };
    return map[type][value] || '';
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mb-4">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Quiz</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Participants</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentQuizzes.map((quiz, index) => (
            <tr key={quiz.id} className={`${index !== currentQuizzes.length - 1 ? (darkMode ? 'border-b border-gray-700' : 'border-b border-gray-200') : ''}`}>
              <td className="py-4 px-4 font-medium dark:text-white">{quiz.title}</td>
              <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{quiz.participants}</td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeClass(quiz.difficulty, 'difficulty')}`}>
                  {quiz.difficulty}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeClass(quiz.status, 'status')}`}>
                  {quiz.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-700'} hover:bg-indigo-500 hover:text-white`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : darkMode
                  ? 'border-gray-600 text-white'
                  : 'border-gray-300 text-gray-700'
              } hover:bg-indigo-500 hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-700'} hover:bg-indigo-500 hover:text-white`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizTable;
