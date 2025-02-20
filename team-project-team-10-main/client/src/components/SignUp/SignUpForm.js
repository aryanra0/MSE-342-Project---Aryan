import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    healthCard: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    address: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log('Form submitted:', formData);
      // Navigate to sign in after successful signup
      navigate('/signin');
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="signup-form-container">
      <div className="form-header">
        <h1>Create your account</h1>
        <p>Please fill in your information to create a new patient account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="healthCard" className="form-label">
              Health Card Number
            </label>
            <input
              type="text"
              id="healthCard"
              name="healthCard"
              className="form-input"
              placeholder="Enter your health card number..."
              value={formData.healthCard}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              className="form-input"
              placeholder="MM/DD/YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              placeholder="Enter your first name..."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              placeholder="Enter your last name..."
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            placeholder="Enter your full address..."
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      <div className="login-link">
        <p>Already have an account?</p>
        <a href="/signin" className="text-link">Sign in to your account</a>
      </div>
    </div>
  );
}

export default SignUpForm;