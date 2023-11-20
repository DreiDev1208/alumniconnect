import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/registration.css';
import supabase from '../../../configs/supabase';

const RegistrationForm = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isverified: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert registration data into the 'alumni_registration' table
    const { data, error } = await supabase
      .from('alumni_registration')
      .upsert([
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          passwordhash: formData.password,
          registrationtime: new Date(),
          isverified: formData.isverified,
        },
      ]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Registration successful. Data:', data);
      // Add logic for any additional steps after successful registration
      alert('Registration successful. Proceeding to Login.');
      navigate('/login'); // Navigate to the login page
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Registration Form</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
        {/* Link to the login page */}
        <div className="form-group">
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
