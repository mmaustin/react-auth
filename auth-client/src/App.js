import React, {useState} from 'react';
/*import SignupForm from './features/users/SignUpForm';
import { FetchUser } from './features/users/FetchUser';
import { LoginForm } from './features/users/LoginForm';
import { Logout } from './features/users/Logout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'*/

export const App =() => {

  return (
    <>
      <Captcha />
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

//const SortAnimals = () => {
  //const animals = ['dog ', 'cat ', 'gorilla ', 'elephant '];
 

  /*const changeColor = event => {
    if(event.target.style.color !== 'red'){
      event.target.style.color = 'red';
    } else {
      event.target.style.color = 'green';
    }
  }*/

/*
  const checkingEvent = e => {
    console.log(e.target.innerText += ' bird');
  }

  return(
    <>
      <p onClick={checkingEvent}>{animals}</p>
    </>
  )
}
*/

/*
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
//                    (props)
const UpcaseAnimals = ({animal, k}) => {
  const yoyo = 'yoyo';
  return(
    <>
      key={props.k}(but this key isn't needed)   {props.animal.toUpperCase()}
      <p key={k}>{animal.toUpperCase()}</p>
      {yoyo}
    </>
  )
}
*/

//The following captcha code is the work of programmer Justin Sherman. I am reproducing it here, because it is an
//interesting example to study. The code can be found on Justin's medium page: https://medium.com/@justin.sherman/react-coding-interview-challenge-14-a2979daf0713

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const Captcha = () => {
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState(1);
  
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ zIndex: 1, marginTop: 200 }}
          onClick={() => {
            setOpen(true);
            setAnswer(Math.floor(Math.random() * 5 + 1));
          }}
        >
          I'm not a robot
        </button>
        {open && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: 100,
              position: "fixed",
              zIndex: 2,
            }}
          >
            <Images answer={answer} setOpen={setOpen} />
          </div>
        )}
      </div>
    );
  };
  
  const Images = ({ answer, setOpen }) => {
    const isAnswer = (id) => {
      id === answer ? setOpen(false) : alert("Intruder!");
    };
  
    return (
      <>
        <div style={{ alignSelf: "center", fontSize: 20 }}>
          {"Select " + answer}
        </div>
        <div style={{ display: "flex", justifyContent: "center", flex: "row" }}>
          <img
            alt=''
            src={ONE}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(1)}
          />
          <img
            alt=''
            src={TWO}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(2)}
          />
          <img
            alt=''
            src={THREE}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(3)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", flex: "row" }}>
          <img
            alt=''
            src={FOUR}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(4)}
          />
          <img
            alt=''
            src={FIVE}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(5)}
          />
          <img
            alt=''
            src={SIX}
            style={{ width: 200, height: 200 }}
            onClick={() => isAnswer(6)}
          />
        </div>
      </>
    );
  };
