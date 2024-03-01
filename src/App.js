import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import UploadNotes from './components/UploadNotes/UploadNotes';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import JoinNow from './components/JoinNow/JoinNow';
import Sidebar from './components/Sidebar/Sidebar';
import Bookstore from './components/Bookstore/Bookstore'; // Ensure this path matches your file structure
import BookCard from './components/BookCard/BookCard'; // Adjusted to the correct path

// Import VideoLecture component
import VideoLecture from './components/VideoLecture/VideoLecture';






function App() {
  const [user, setUser] = useState(null);
  const [activeContent, setActiveContent] = useState(null); // Correct placement for useState

  // Define your handlers
  const handleJoinNow = async (username, email, password) => {
    console.log("Joining now:", username, email, password);
    setUser({ name: username });
  };

  const handleLogin = (username, password) => {
    console.log("Logging in:", username, password);
    setUser({ name: username });
  };

  const handleSignOut = () => {
    console.log("Signing out");
    setUser(null);
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <Router>
      <NavigationBar user={user} onSignOut={handleSignOut} />
      <div className="app-body">
        <Sidebar onContentChange={handleContentChange} />
        
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" render={() => <Home user={user} />} />
          <Route path="/login" render={() => user ? <Redirect to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/join" render={() => user ? <Redirect to="/home" /> : <JoinNow onJoinNow={handleJoinNow} />} />
          <Route path="/upload" component={UploadNotes} />
          <ProtectedRoute path="/dashboard" component={() => <Dashboard user={user} />} />
          <Route path="/" element={<Home />} />
          <Route path="/E-Books" element={<BookCard />} />
          <Route path="/E-Books" component={Bookstore} />


          {/* Conditional rendering based on activeContent */}
          {activeContent === 'itFoundation' && <VideoLecture title="Introduction to IT" videoUrl="your_video_url_here" />}
          {/* You can add more conditions for other courses or lectures */}


          {/* Render content based on activeContent state */}
          {/* This is where you'd conditionally render VideoLecture or other content */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
