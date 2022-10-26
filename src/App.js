import logo from './logo.svg';
import './App.css';
import Navegacion from './Componentes/Navegacion';
//import Tarjetas from './Componentes/Tarjetas';
import Cargar from './Componentes/Cargar';
import Pie_pagina from './Componentes/Pie_pagina';
import Formulario from './Componentes/formulario';

function App() {
  return (
    <div className="App">
      <Navegacion enlace1='Inicio' enlace2='Nuevo' enlace3='Login' enlace4h={true}/>
      <Cargar/>
      
      {/* <div className='row'>
        <Tarjetas titulo='Titulo 1' descripcion='Descripción tarjeta 1'/>
        <Tarjetas titulo='Titulo 2' descripcion='Descripción tarjeta 2'/>
        <Tarjetas titulo='Titulo 3' descripcion='Descripción tarjeta 3'/>
        <Tarjetas titulo='Titulo 4' descripcion='Descripción tarjeta 4'/>
      </div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer React
        </a>
      </header>
      <Formulario/>

      <Pie_pagina/>
    </div>
  );
}

export default App;
