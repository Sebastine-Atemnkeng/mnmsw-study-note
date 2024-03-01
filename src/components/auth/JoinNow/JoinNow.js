import React, { useState } from 'react';
import './JoinNow.css'; // Updated path

const JoinNow = ({ onJoinNow }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onJoinNow(username, email, password); // Assuming onJoinNow is your updated prop function
  };

  return (
    <div className="join-now-container">
      <h2>Join Now</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="join-now-button">Join Now</button>
      </form>
    </div>
  );
};

export default JoinNow;
