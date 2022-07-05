import React from 'react';

function Testimonio () {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../images/Emma.png')}
        alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Edward</p>
        <p className='cargo-testimonio'>Ingeniero</p>
        <p className='texto-testimonio'>Firme</p>
      </div>
    </div>
  );
}

export default Testimonio;