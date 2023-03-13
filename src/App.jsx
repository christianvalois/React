import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import './css/App.css';
import Inicio from './componentes/Paginas/Inicio';
import Productos from './componentes/Paginas/Productos';
import QuienesSomos from './componentes/Paginas/Quienes Somos';
import Contacto from './componentes/Paginas/Contacto';
function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}
export default App;
