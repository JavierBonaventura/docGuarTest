import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({rutaActiva}) {
  return (
    <div style={{ width: '200px', background: '#f0a0f0' }}>
      <h3>Sidebar</h3>
      <ul>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <h3>{rutaActiva}</h3>
      </ul>
    </div>
  );
}

export default Sidebar;
