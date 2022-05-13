import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form className={s.container}
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
        value={city}
      />
      <input className={s.btnSearch} type="submit" value="Agregar" />
    </form>
  );
}



// import React from 'react';
// import s from './SearchBar.module.css';

// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   return (
//   <div className={s.container}>
//     <input type='text' placeholder='Ingrese Ciudad...'/> 
//     <button className={s.btnSearch} onClick={() => onSearch('Agregando ciudad...')}>Agregar</button> 
//   </div>
  
//   )
// };