// src/Components/Vegetable.jsx
import React from 'react';
import vegetable from '../assets/Vegetable';
import '../App.css';

function Vegetable() {
  return (
    <div className='product-card'>
      {vegetable.map((item, index) => (
        <article key={index} className='product-card-item'>
          <img src={item.url} alt={item.name} className='product-card-img' />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Vegetable;
