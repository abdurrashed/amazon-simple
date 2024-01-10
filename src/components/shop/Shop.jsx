import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/product';

const Shop = () => {

 const [products,setProducts]=useState([]);

  useEffect(()=>{
   fetch('products.json')
   .then(res => res.json())
   .then(data =>setProducts(data))
  




  },[])







    return (
        <div className='shop-container'>

        <div className="products-containers">
         {
              products.map(productt =><Product
                key={productt.id}
                productt={productt}

              ></Product>)

         }
     
        </div>

        <div className="cart-container">


         <h2>Order Summary</h2>


        </div>


            
        </div>
    );
};

export default Shop;