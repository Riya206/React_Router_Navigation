
// src/Components/Fruit.jsx
import React from 'react';
import fruit from '../assets/Fruit';
import '../App.css';

function Fruit() {
  return (
    <div className='product-card'>
      {fruit.map((item, index) => (
        <article key={index} className='product-card-item'>
          <img src={item.url} alt={item.name} className='product-card-img' />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Fruit;
