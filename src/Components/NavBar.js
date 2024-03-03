import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{ width: '100%', background: '#f0f550' }}>
      <h3>NavBar</h3>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
