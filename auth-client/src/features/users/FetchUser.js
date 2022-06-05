import React, {useEffect, useState} from 'react';

export const FetchUser = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:3000/me").then((res) => {
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
    return(
        <>
            <p>{currentUser.username}</p>
        </>
    )
}
