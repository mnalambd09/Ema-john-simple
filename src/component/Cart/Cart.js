import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-section'>
            <h3>Summery</h3>
            <p>Selected Item: ={cart.length}</p>
        </div>
    );
};

export default Cart;