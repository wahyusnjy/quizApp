const StatsCard = ({ stat, darkMode }) => {
  return (
    <div className={`p-5 rounded-xl shadow transition-transform hover:scale-105 bg-gray-800`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
          <h3 className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-gray-700' text-indigo-600 dark:text-indigo-400`}>
          <i className={`${stat.icon} text-xl`}></i>
        </div>
      </div>
      <p className={`text-sm mt-4 ${stat.changePositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
        {stat.change} from last week
      </p>
    </div>
  );
};

export default StatsCard;
