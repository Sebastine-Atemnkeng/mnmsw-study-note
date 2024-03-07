import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; // Adjust the path as needed


// Import your components
import NavBar from './components/Global/NavBar/NavBar';

import UploadNotes from './components/Containers/UploadNotes/UploadNotes';
import Login from './components/auth/Login/Login';
import SignUp from './components/auth/SignUp/SignUp';
import JoinNow from './components/auth/JoinNow/JoinNow';
// import SearchBar from './components/Global/SearchBar/SearchBar';

import Foundation from './components/features/courses/Foundation/Foundation';

import CoursesPage from './components/features/courses/CoursesPage.js/CoursesPage';

// Importing BookCard and Bookstore components
import BookCard from './components/features/e-books/BookCard/BookCard';
import Bookstore from './components/features/e-books/Bookstore/Bookstore';

function App() {
  const [user, setUser] = useState(null);

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

  return (
    <Router>
    
      <div>
        <NavBar user={user} onSignOut={handleSignOut} />
      </div>

      <div className="app-body">
      {/* <sidebar onContentChange={handleContentChange} /> */}

        
        <Switch>
          
          <Route path="/signup" component={SignUp} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/e-books" component={Bookstore} />

          <Route path="/e-books/:bookId" component={BookCard} />
          <Route path="/login" render={() => user ? <Redirect to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/join" render={() => user ? <Redirect to="/home" /> : <JoinNow onJoinNow={handleJoinNow} />} />
          <Route path="/upload" component={UploadNotes} />
          <Route path="/Foundation" element={<Foundation />} />
          {/* Additional routes as needed */}
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
