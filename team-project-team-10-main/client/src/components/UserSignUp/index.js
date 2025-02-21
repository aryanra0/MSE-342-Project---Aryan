import React from 'react';
import SignUpNav from './SignUpNav';
import SignUpForm from './SignUpForm';
import './SignUpStyles.css';

function SignUpPage() {
  return (
    <div className="background">
      <div className="container">
        <header className="header">
          <a href="/" className="logo">MedSync</a>
          <SignUpNav />
        </header>
        <main className="main-content">
          <SignUpForm />
        </main>
      </div>
    </div>
  );
}

export default SignUpPage;