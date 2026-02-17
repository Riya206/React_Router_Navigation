// src/Components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to E-Shop</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Link to='/fruit'>Fruit</Link>
        <Link to='/vegetable'>Vegetable</Link>
        <Link to='/stationary'>Stationary</Link>
      </div>
    </div>
  );
}

export default Home;
