import React, { useState, useEffect } from 'react';

function Inicio() {
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchName, setSearchName] = useState('');

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
        console.error('There was a problem with the fetch operation:');
      });

    fetch('/api/v1/roles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRoles(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:');
      });
  }, []);

  const getRoleIdFromRoleName = (roleName) => {
    const role = roles.find(role => role.rolename === roleName);
    return role ? role.roleid : 'Unknown';
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredUsers = userData ? userData.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase())) : [];

  return (
    <div>
      <h2>Inicio</h2>
      <p>Muestra json</p>

      <input 
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={handleSearchChange}
      />



      {userData && roles && (
        <div>
          <h3>Resultado:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Role ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{getRoleIdFromRoleName(user.rolename)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Inicio;
