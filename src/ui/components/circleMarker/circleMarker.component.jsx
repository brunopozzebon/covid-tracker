import React from 'react';

import { Circle } from './styles';
const MINIMUN_SIZE = 2;

export const CircleMarker = ({maxCase, country}) => {

  const radiusBigger = Math.sqrt(maxCase / Math.PI); //Se a quantidade de casos fosse a area, descubro qual o raio do maior caso
  let radiusComparing = (radiusBigger * country.totalConfirmed) / maxCase; //Regra de tres para descobrir outros raiod
  radiusComparing = parseInt(Math.sqrt(radiusComparing) * 8); //Reduzo valores grandes e incremento pequenos (Reduz escala) - Depois transformo em int

  if (radiusComparing < MINIMUN_SIZE) // tamanho minimo
    radiusComparing = MINIMUN_SIZE;

  return (

    <Circle size={radiusComparing} longitude={country.longitude} latitude={country.latitude}>
      <div></div>
    </Circle>

  );  
}
