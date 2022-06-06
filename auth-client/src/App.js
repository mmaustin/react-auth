import React from 'react';
import SignupForm from './features/users/SignUpForm';
import { FetchUser } from './features/users/FetchUser';
import { LoginForm } from './features/users/LoginForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App =() => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< SignupForm />} />
        <Route exact path="/fetch" element={< FetchUser />} />
        <Route exact path="/login" element={< LoginForm />} />
      </Routes>
    </Router>  
  );
}

export default App;
