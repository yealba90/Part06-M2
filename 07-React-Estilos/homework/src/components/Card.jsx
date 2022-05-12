import React from 'react';
import s from './Card.module.css';

export default function Card({name, min, max, onClose, img}) {
  // acá va tu código
  return (
  <div className={s.container}>
    <button className={s.btnClose} onClick={onClose}>X</button>
    <h3 className={s.header}>{name}</h3>
    <div className={s.grid}>
      <div>
        <p>MIN</p>
        <p>{min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{max}</p>
      </div>
      <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
      </div>
    </div>
  </div>
  )
};


