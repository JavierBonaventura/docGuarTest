import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Usuarios from './Usuarios';
import Productos from './Productos';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

function Inicio() {
  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido a la página de inicio</p>
    </div>
  );
}

export default App;
