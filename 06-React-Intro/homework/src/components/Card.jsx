import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <span>{props.name}</span>
    <button onClick={props.onClose}>X</button>
    <div>
      <div>
        <p>MIN</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/02d@2x.png`} />
    </div>
  </div>
  )
};