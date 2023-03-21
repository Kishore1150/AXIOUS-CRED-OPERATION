import React from 'react';
import'./menu.css'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="food-area">
      <div class="container">
        <div class="title">
          {/* <h4><i style={{fontSize:'1.2em'}} class="fa-solid fa-utensils"></i> &nbsp;Menu </h4> */}
          <div class="foods">

                <div class="singlefood">
                  <div class="food-img">
                    <img
                      src={product.image}
                      alt={product.name} 
                      height="230px"
                      width="350px"
                    />
                    <h4>{product.name}</h4>
                  </div>

                  <ul class="food-list">
                    <li>{product.name}</li>
                    <li>₹ {product.price}</li>
                  </ul>
                  <div className="but">
                  {/* <Counter/> */}
                  </div>
                  <div className="pos">
                  <button onClick={() => onAdd(product)}>Add to Cart</button>
                </div>
                </div>
             
          </div>
        </div>
      </div>
    </div>

  );
}
