import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import imgFacundo from './imagenes/imagenFacundo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);  // 0 es el valor inicial

  const sumarClic = () => {
    setNumClics(numClics + 1);
  };

  const restarClic = () => {
    if(numClics > 0) { 
      setNumClics(numClics - 1);
    }
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-facundo-contenedor'>
        <img 
          className='logo-facundo'
          src={imgFacundo}
          alt='Logo de Facundo' />
      </div>
      <div className='contenedor-contador'>
        <Contador 
          numClics={numClics} />
        <div>
        <Boton 
          texto='+'
          botonClic={true}
          manejarClic={sumarClic} />
        <Boton 
          texto='-'
          botonClic={true}
          manejarClic={restarClic} />
        </div>
        <Boton 
          texto='Reiniciar'
          botonClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
