import React from 'react';
import SignupForm from './features/users/SignUpForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App =() => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< SignupForm />} />
      </Routes>
    </Router>  
  );
}

export default App;
