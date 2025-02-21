import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const LandingPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleNext = () => {
    if (selectedRole === 'patient') {
      navigate('/p-login');
    } else if (selectedRole === 'practitioner') {
      navigate('/h-login');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <header className="header">
          <a href="/" className="logo">MedSync</a>
          <Navbar />
        </header>
        <main className="main-content">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-semibold mb-4">Select your role</h1>
            <p className="text-gray-600">
              Welcome to MedSync, your integrated healthcare platform. Choose your role to
              access personalized features and services designed specifically for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <button
              className={`role-card ${selectedRole === 'patient' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('patient')}
            >
              <div className="h-48 mb-6">
                <img 
                  src="/Images/Patient.svg" 
                  alt="Patient illustration"
                  className="h-full w-auto mx-auto"
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
              </div>
              <h2 className="text-xl font-medium text-[#819672] border-t border-[#E3EDDD] pt-4">
                Patient Care
              </h2>
            </button>

            <button
              className={`role-card ${selectedRole === 'practitioner' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('practitioner')}
            >
              <div className="h-48 mb-6">
                <img 
                  src="/Images/Practitioner.svg" 
                  alt="Healthcare practitioner illustration"
                  className="h-full w-auto mx-auto"
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
              </div>
              <h2 className="text-xl font-medium text-[#819672] border-t border-[#E3EDDD] pt-4">
                Healthcare Practitioner
              </h2>
            </button>
          </div>

          <div className="text-center">
            <button
              className={`next-button ${!selectedRole ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={!selectedRole}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;