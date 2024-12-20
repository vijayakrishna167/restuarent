import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'
const Fooditem = ({id,name,prize,description,image}) => {

    // const [itemcount,setItemcount]=useState(0)
    const{cartitems,addtocart,removefromcart}=useContext(Storecontext);
  return (
    <div className='fooditem'>
        <div className="fooditem-img-container">
            <img className='fooditem-img' src={image}/>
            {!cartitems[id]
                ?<img className='add' onClick={()=>addtocart(id)}src={assets.add_icon_white}/>
                :<div className='fooditem_counter'>
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red}/>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.add_icon_green}/>
                </div>

            }
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='fooditem-desc'>{description}</p>
            <p className='fooditem-prize'>${prize}</p>
        </div>
    </div>
  )
}

export default Fooditem
