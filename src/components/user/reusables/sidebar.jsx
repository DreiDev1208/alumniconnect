import { Link } from 'react-router-dom';
import './css/sidebar.css';

const Sidebar = () => {
  return (
      <div className="sidebar">
        <div className="sbcontainer">
        <h3>Dashboard</h3>
            <ul>
                <li>
                <Link to="/dashboard">Home</Link>
                </li>
                <li>
                <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                <Link to="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;
