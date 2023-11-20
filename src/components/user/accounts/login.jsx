import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import supabase from '../../../configs/supabase';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Fetch user data based on the entered username (email)
    const { data, error } = await supabase
      .from('alumni_registration')
      .select()
      .eq('email', username)
      .single();
  
    if (error) {
      console.error('Error fetching user data:', error.message);
      return;
    }
  
    // Check if user exists and compare passwords (hashed)
    if (data && data.passwordhash === password) {
      console.log('Login successful');
      // You can add logic here for setting user authentication status if needed
  
      // Show a success message
      alert('Login successful. Redirecting to the dashboard.');
  
      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      console.log('Invalid username or password');
      // Handle invalid login attempt
    }
  };

  const handleForgotPasswordClick = () => {
    console.log('Forgot Password clicked. Implement your logic here.');
    // Add your logic for handling Forgot Password
  };

  const handleCreateAccountClick = () => {
    console.log('Create Account clicked. Navigating to Registration page.');
    navigate('/registration');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="forgot-password">
            <span onClick={handleForgotPasswordClick}>Forgot Password?</span>
          </p>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
        <div className="form-group">
          <p className="create-account">
            Dont have an account? <span onClick={handleCreateAccountClick}>Create one</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
