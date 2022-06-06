import React from 'react';

export const Logout = () => {

    const handleLogout = () => {
        fetch('http://localhost:3000/logout', {method: "DELETE"})
        .then(res => {
              console.log(res);
            })
      }

    return(
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}