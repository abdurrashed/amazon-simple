import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
const saveCart =[];

 const [products,setProducts]=useState([]);
 const [cart,setcart]=useState([])

  useEffect(()=>{
   fetch('products.json')
   .then(res => res.json())
   .then(data =>setProducts(data))
  




  },[])

  useEffect(()=>{
  const storeCart=getShoppingCart();
  for(const id in storeCart){

      const addedProduct=products.find(product=>product.id===id)
      if(addedProduct){
        

        const quantity=storeCart[id];
        addedProduct.quantity=quantity;
        saveCart.push(addedProduct);

      }

         
     





      }
      setcart(saveCart);



  },[products])

  const handleAddTocart=(productt)=>{
    
  const newcart=[...cart,productt];
  setcart(newcart);
  addToDb(productt.id);

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