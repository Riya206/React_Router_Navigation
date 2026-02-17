// src/Components/Stationary.jsx
import React from 'react';
import stationary from '../assets/Stationary';
import '../App.css';

function Stationary() {
  return (
    <div className='product-card'>
      {stationary.map((item, index) => (
        <article key={index} className='product-card-item'>
          <img src={item.url} alt={item.name} className='product-card-img' />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Stationary;
