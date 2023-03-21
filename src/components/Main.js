import React from 'react';
import './menu.css';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className='food-area'>
     
      <div className="container">
      <div class="title">
        <h2><i style={{fontSize:'1.2em'}} class="fa-solid fa-utensils"></i> &nbsp;Menu </h2>
        <div className='foods'>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
          )
          )}
          </div>
          </div>
      </div>
    </main>
  );
}
