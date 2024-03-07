import React, { useState } from 'react';
import './Login.css'; // Make sure to create a Login.css file for styling
import { useHistory } from 'react-router-dom'; // Make sure to import useHistory

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    if (!username || !password) {
      setError('Username and password are required');
      setIsLoading(false);
      return;
    }

    try {
      await onLogin(username, password);
      // Handle successful login if necessary
    } catch (e) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize history using the useHistory hook
  const history = useHistory();

  const navigateToSignUpWithEmail = () => {
    history.push('/signup'); // Redirects the user to the login page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">Login</div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-field">
          {error && <div className="error-message">{error}</div>}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-options">
            <div className="checkbox-container">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <div className="forgot-password-link">Forgot Password</div>
          </div>
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div className="separator"></div>
          <button type="button" className="google-login">Login with Google</button>
          <button type="button" className="teachable-login">Login with Teachable</button>
          <div className="signup-link">Need an account? <span onClick={navigateToSignUpWithEmail} style={{cursor: 'pointer', textDecoration: 'underline'}}>Sign Up</span></div>

        </form>
      </div>
    </div>
  );
};

export default Login;
