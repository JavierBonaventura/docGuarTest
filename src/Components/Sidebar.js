import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ width: '200px', background: '#f0a0f0' }}>
      <h3>Sidebar</h3>
      <ul>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
