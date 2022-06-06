import React from 'react';

export const Logout = () => {

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
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