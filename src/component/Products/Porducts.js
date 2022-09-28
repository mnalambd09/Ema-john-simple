import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Porducts = (props) => {
    const {img, ratings, name, price, category} = props.product || '';
    const {addToCartHandler} = props
    // console.log(props)
     return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            {/* <p>Manufacturer: {}</p> */}
            <p>Category: {category}</p>
            <p>Ratings: {ratings} Stars</p>
            <button className='btn' onClick={()=> addToCartHandler(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Porducts;