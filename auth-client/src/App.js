import React from 'react';
/*import SignupForm from './features/users/SignUpForm';
import { FetchUser } from './features/users/FetchUser';
import { LoginForm } from './features/users/LoginForm';
import { Logout } from './features/users/Logout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'*/

const App =() => {

  return (
    <>
      <PrintInOrder/>
    {/*<Router>
      <Routes>
        <Route exact path="/" element={< SignupForm />} />
        <Route exact path="/fetch" element={< FetchUser />} />
        <Route exact path="/login" element={< LoginForm />} />
        <Route exact path="/logout" element={< Logout />} />
      </Routes>
  </Router>*/}
    </>
  );
}

const PrintInOrder = () => {
  const animals = ['dog', 'cat', 'gorilla', 'elephant'];
  const animalList = animals.map((animal, i) => {
    return <p key={i}>{animal}</p>;
  });
  return(
    <>
      {animalList}
    </>
  )
}

export default App;
