import React, { useState, useEffect } from 'react';

function Inicio() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        console.log(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido a la página de inicio</p>
      {userData && (
        <div>
          <h3>Usuarios:</h3>
          <ul>
            {userData.map(user => (
              <li key={user.userid}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Inicio;
