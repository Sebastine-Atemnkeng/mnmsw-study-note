import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Here's your progress on the subjects you're studying.</p>
      {/* Insert progress bars or statistics here */}
    </div>
  );
};

export default Dashboard;
