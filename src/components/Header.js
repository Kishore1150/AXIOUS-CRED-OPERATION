import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1><i style={{fontSize:'1em'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</h1>
        </a>
      </div>
      <div>
        <a href="#/cart"><i class="fa-solid fa-cart-shopping"></i>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        
      </div>
    </header>
  );
}
