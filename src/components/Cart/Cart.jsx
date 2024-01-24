import React from 'react';
import './Cart.css';
const Cart = (props) => {
  
    
    const {cart}=props;
    console.log(cart);
  

    let totalprice=0;
    let totalshipping=0;
    for(const productt of cart){

      totalprice= totalprice+productt.price;
      totalshipping=totalshipping+productt.shipping;

    }
    const tax=totalprice*7/100;
    const grandtotal=tax+totalshipping+totalprice;
    return (
        <div className='cart'>

         <h2>Order Summary</h2>
         <p>Selected Items:{cart.length}</p>
         <p>Total Price:${totalprice}</p>
         <p>Total Shipping:${totalshipping}</p>
         <p>Tax:${tax}</p>
         <h6>Grand Total:${grandtotal} </h6>

            
        </div>
    );
};

export default Cart;