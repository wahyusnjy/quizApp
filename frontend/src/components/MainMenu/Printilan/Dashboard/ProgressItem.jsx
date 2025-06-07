const ProgressItem = ({ item, darkMode }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium text-gray-300`}>
          {item.category}
        </span>
        <span className={`text-sm font-medium text-gray-300`}>
          {item.progress}%
        </span>
      </div>
      <div className={`w-full h-2 bg-gray-700rounded-full`}>
        <div
          className="h-full bg-indigo-600 rounded-full"
          style={{ width: `${item.progress}%` }}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
};

export default ProgressItem;
