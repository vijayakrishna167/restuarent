import React, { useContext } from 'react'
import './cart.css'
import { Storecontext } from '../../context/Storecontext'
const Cart = () => {
  // 
  const { cartItems = {}, food_list = [], removeFromCart = () => {} } = useContext(Storecontext);

  return (
      // console.log("cartItems:", cartItems);
      // console.log(food_list);
    <div className='cart'>
      <div className="cart_items">
        <div className="cart_items_title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0 || 0)
          {
            return (
              <div key={item._id} className='cart_iems_title cart_items_item'>
                <p>hellpo</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
