import React from 'react';
/*import SignupForm from './features/users/SignUpForm';
import { FetchUser } from './features/users/FetchUser';
import { LoginForm } from './features/users/LoginForm';
import { Logout } from './features/users/Logout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'*/

export const App =() => {

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
return(  
  <div>
    {animals.map((animal, i) => (
      <UpcaseAnimals key={i} k={i} animal={animal}/>
    ))}
  </div>
)
}

const UpcaseAnimals = (props) => {
  console.log(props)
  return(
    <p key={props.k}>{props.animal.toUpperCase()}</p>
  )
}

//export default App;
