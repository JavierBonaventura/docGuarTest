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
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Agregar una consola para ver el contenido de la respuesta en caso de error
      response.text().then(text => console.log(text));
    });
  
  }, []);

  return (
    <div>
      <h2>Inicio1</h2>
      <p>Muestra json</p>
      {/* {userData && (y

        <div>
          <h3>Usuarios:</h3>
          <ul>
            {userData.map(user => (
              <li key={user.userid}>{user.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default Inicio;
