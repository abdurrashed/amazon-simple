import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/product';
import Cart from '../Cart/Cart';

const Shop = () => {

 const [products,setProducts]=useState([]);
 const [cart,setcart]=useState([])

  useEffect(()=>{
   fetch('products.json')
   .then(res => res.json())
   .then(data =>setProducts(data))
  




  },[])

  const handleAddTocart=(productt)=>{
    
  const newcart=[...cart,productt];
  setcart(newcart);

 }







    return (
        <div className='shop-container'>

        <div className="products-containers">
         {
              products.map(productt =><Product
                key={productt.id}
                productt={productt}
                handleAddTocart={
                    handleAddTocart
              

                 }

              ></Product>)

         }
     
        </div>

        <div className="cart-container">


       <Cart cart={cart}></Cart>


        </div>


            
        </div>
    );
};

export default Shop;