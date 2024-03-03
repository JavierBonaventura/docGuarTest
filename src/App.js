import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import Usuarios from './Components/Usuarios';
import Productos from './Components/Productos';
import Inicio from './Components/Inicio'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NavBar />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/productos" element={<Productos />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

// function Inicio() {
//   return (
//     <div>
//       <h2>Inicio</h2>
//       <p>Bienvenido a la página de inicio</p>
//     </div>
//   );
// }

export default App;
