import React, {useEffect, useState} from 'react';
//import SignupForm from './features/users/SignUpForm';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App =() => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }

  return (
    <>
      {currentUser ? <p>yes</p> : <p>no</p>}
    
    {/*<Router>
      <Routes>
        <Route exact path="/" element={< SignupForm />} />
      </Routes>
  </Router>*/}
  </>  
  );
}

export default App;
