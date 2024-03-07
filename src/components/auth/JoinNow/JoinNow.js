import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './JoinNow.css'; // Ensure this CSS file exists and contains the styles you'll define

const JoinNow = ({ onJoinNow }) => {
  const history = useHistory(); // Use the useHistory hook for navigation

  // Function to navigate to the SignUp page
  const navigateToSignUpWithEmail = () => {
    history.push('/signup'); // Use the path to your SignUp page here
  };

  // Function to handle navigation to the login page
  const navigateToLogin = () => {
    history.push('/login'); // Replace '/login' with the path to your actual login page
  };

  return (
    <div className="join-now-page">
      <div className="join-now-container">
        <div className="top-section">
          <div className="login-link" onClick={navigateToLogin}>Already have an account? Log in</div>
          <h2 className="title">Sign Up</h2>
          <button onClick={navigateToSignUpWithEmail} className="email-signup">Sign up with email</button>
        </div>
        <div className="social-login">
          
          <button className="google-login">Continue with Google</button>
          <button className="teachable-login">Continue with Teachable</button>
        </div>
        <div className="email-opt-in">
          <input type="checkbox" id="email-opt" />
          <label htmlFor="email-opt">Yes, Study Note can email me with promotions and news. (optional)</label>
        </div>
        <div className="terms">
          By signing up, I agree to Study Note's <a href="/terms-of-use">Terms of Use</a> &
          <a href="/privacy-policy"> Privacy Policy</a> of the learning platform.
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
