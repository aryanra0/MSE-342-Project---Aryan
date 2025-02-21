import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginForm from './SignInForm';
import './styles.css';

function SignIn() {
  return (
    <div className="background">
      <div className="container">
        <header className="header">
          <a href="/" className="logo">MedSync</a>
          <Navbar />
        </header>
        <main className="main-content">
          <LoginForm />
        </main>
      </div>
    </div>
  );
}

export default SignIn;