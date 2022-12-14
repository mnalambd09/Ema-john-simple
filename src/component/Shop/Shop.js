import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Porducts from '../Products/Porducts';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    const addToCartHandler = (product) => {
        // console.log(product)
        // cart.push(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Porducts 
                        key={product.id}
                        product = {product}
                        addToCartHandler = {addToCartHandler}
                        ></Porducts>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;