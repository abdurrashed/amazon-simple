import React from 'react';
import './Product.css';

const Product = (props)=>{
    const {img , name , ratings,seller,quantities,price} = props.productt;
    return (
        <div className='product'>
            <img src={img} alt=""  />
            <div className="product-info">

                 <h6 className='product-name'>{name}</h6>
            <p>price:${price}</p>
            <p>Manufacurer:{seller}</p>
            <p>Rating:{ratings}</p>

            </div>
            <button className='btn-cart'>Add to cart</button>

        </div>
    );
};

export default Product;