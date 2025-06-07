const SidebarItem = ({ item, activeTab, setActiveTab, darkMode }) => {
  return (
    <li>
      <button 
        onClick={() => setActiveTab(item.id)} 
        className={`sidebar-item ${activeTab === item.id ? 'active' : ''} dark`}
      >
        <i className={item.icon}></i>
        <span>{item.label}</span>
      </button>
    </li>
  );
};

export default SidebarItem;