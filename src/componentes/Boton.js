import React from 'react';
import '../estilos/boton.css'

function Boton({ texto, botonClic, manejarClic }){    //sintacsis de desectructuracion - en cuenta de prop
  return(
    <button
      className={ botonClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={manejarClic}>
      {texto}
    </button>
  )
};

export default Boton;