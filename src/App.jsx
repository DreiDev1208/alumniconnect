import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/user/accounts/login';
import RegistrationForm from './components/user/accounts/registration';
import Dashboard from './components/user/pages/dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ALUMNI */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ADMIN */}
      </Routes>
    </Router>
  );
};

export default App;
