import React, { useContext } from 'react'
import './fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem'
const Fooddisplay = (category) => {

    const{food_list}=useContext(Storecontext)
  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>top dishes near you</h2>
        <div className="fooddisplay-list">
            {food_list.map((item,index)=>{
                // {console.log(category,item.category);}
                {
                    console.log("Category:", category);
console.log("Item Category:", item.category);

                }
                if(category.category===item.category|| category.category==="All") {
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} prize={item.price} image={item.image}/>
                }
               
            })}
        </div>
      
    </div>
  )
}

export default Fooddisplay
