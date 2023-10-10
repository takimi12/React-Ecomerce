import React, { useState, useEffect } from 'react';

const MiniCart = () => {

  return (

    <>
    <div className='MiniCart'>
     
  
          <div className="ps-cart__footer">
            <h3>Suma całkowita: <strong></strong></h3>
            <figure>
              <a className="ps-btn" href="/account/shopping-cart">View Cart</a>
              <a className="ps-btn ps-btn1" href="/account/checkout">Checkout</a>
            </figure>
          </div>
          </div>
        </>
  );
};

export default MiniCart;
