import React, { useState, useEffect  } from 'react';

function Inicio() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState([]);



  useEffect(() => {

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

    fetch('/api/v1/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        // console.log(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:');
        
      });
  }, []);


  const getRoleIdFromRoleName = (roleId) => {
    const role = roles.find((r) => r.roleid === roleId);
    return role ? role.rolename : "Unknown";
  };

  const [formData, setFormData] = useState({
    username: '',
    password: ''
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log(formData)
  try {
      const response = await fetch('/api/v1/userlogin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });
      // console.log(response)
      if (response.ok) {
          // onLogin(formData.username);

          // Manejar la respuesta exitosa (redireccionar, mostrar mensaje, etc.)
          console.log('Login successful');
      } else {
          // Manejar errores de inicio de sesión (mostrar mensaje de error, etc.)
          console.error('Login failed');
      }
  } catch (error) {
      console.error('Error during login:', error);
  }
};



// cod nuevo



  return (
    <div>
      <h2>Inicio</h2>
      <p>Muestra json</p>

      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                                <label htmlFor="username" className="block text-base font-medium text-black">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="mb-12">
                                <label htmlFor="password" className="block text-base font-medium text-black">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sign In
                                    </button>
                                </div>
                                <div className="mb-4">
                                </div>
                                <div>
                                    <a href="#" className="text-sm text-black font-medium hover:text-gray-900">Forgot your password?</a>
                                </div>
                            </div>
                        </form>

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
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{getRoleIdFromRoleName(user.roleid)}</td>
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
