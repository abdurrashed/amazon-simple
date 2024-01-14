import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'



const Product = (props)=>{

    const {img , name , ratings,seller,quantities,price} = props.productt;
    const handleAddTocart=props.handleAddTocart;
    return (
        <div className='product'>
            <img src={img} alt=""  />
            <div className="product-info">

                 <h6 className='product-name'>{name}</h6>
            <p>price:${price}</p>
            <p>Manufacurer:{seller}</p>
            <p>Rating:{ratings}</p>

            </div>
            <button onClick={()=>handleAddTocart(props.productt)} className='btn-cart'>Add to cart
            const element = <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;