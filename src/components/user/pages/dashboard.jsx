import Sidebar from '../reusables/sidebar';
import './css/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h2>Welcome to the Dashboard!</h2>
        {/* Your dashboard content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
