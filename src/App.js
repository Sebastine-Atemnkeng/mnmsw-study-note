import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



// Import your components
import NavigationBar from './components/Global/NavigationBar/NavigationBar';
import Home from './components/Containers/Home/Home';
import LandingPage from './components/Containers/pages/LandingPage';
import UploadNotes from './components/Containers/UploadNotes/UploadNotes';
import Login from './components/auth/Login/Login';
import Dashboard from './components/Containers/Dashboard/Dashboard';
import ProtectedRoute from './components/Global/ProtectedRoute/ProtectedRoute';
import JoinNow from './components/auth/JoinNow/JoinNow';
import Sidebar from './components/Global/Sidebar/Sidebar';

// Importing BookCard and Bookstore components
import BookCard from './components/features/e-books/BookCard/BookCard';
import Bookstore from './components/features/e-books/Bookstore/Bookstore';

function App() {
  const [user, setUser] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

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
          <Route path="/e-books" component={Bookstore} />

          <Route path="/e-books/:bookId" component={BookCard} />
          <Route path="/home" render={() => <Home user={user} activeContent={activeContent} />} />
          <Route path="/login" render={() => user ? <Redirect to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/join" render={() => user ? <Redirect to="/home" /> : <JoinNow onJoinNow={handleJoinNow} />} />
          <Route path="/upload" component={UploadNotes} />
          <ProtectedRoute path="/dashboard" component={() => <Dashboard user={user} />} />
          {/* Additional routes as needed */}
          


        </Switch>
      </div>
    </Router>
  );
}

export default App;
