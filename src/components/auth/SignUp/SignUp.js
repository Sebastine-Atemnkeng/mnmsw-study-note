import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css'; // Make sure to create and link a SignUp.css file for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the sign-up logic
    console.log('Submitted: ', { email, password });
    // Redirect user to the dashboard or verification page as needed
    // history.push('/dashboard');
  };

  const navigateToSignIn = () => {
    history.push('/login'); // Redirects the user to the login page
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="top-section">
          <div className="signin-link" onClick={navigateToSignIn}>Already have an account? Login</div>
          <h2 className="title">Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">

          <div className="form-field">
              <label htmlFor="email">Full Name</label>
              <input
                id="name"
                type="name"
                placeholder="Enter full names"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="email-opt-in">
              <input type="checkbox" id="email-updates" />
              <label htmlFor="email-updates">I want to receive news and updates.</label>
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
