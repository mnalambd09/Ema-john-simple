import React from 'react';
import Porducts from '../Products/Porducts';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = total * 0.1;
    return (
        <div className='cart-section'>
            <h3>Summery</h3>
            <p>Selected Item: ={cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total</h5>
        </div>
    );
};

export default Cart;