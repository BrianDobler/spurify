import React from 'react';

function HoraActualLocal() {
  const tiempoActual = new Date();
  const horaOffSet = tiempoActual.getTimezoneOffset() * 60000; 

  return new Date(tiempoActual.getTime() - horaOffSet).getHours();
}

function Saludo() {
  
  const horaActualLocal = HoraActualLocal();

  let saludo = '';

  if (horaActualLocal < 12) {
    saludo = '¡Buenos Días! 🌞';
  } else if (horaActualLocal < 18) {
    saludo = '¡Buenas Tardes! 🌇';
  } else {
    saludo = '¡Buenas Noches! 🌙';
  }
  console.log(saludo);
  return (
    <h1 className="text-white text-4xl font-bold">
      {saludo}
    </h1>
  );
}

export default Saludo;
