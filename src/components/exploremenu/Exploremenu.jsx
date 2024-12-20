import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ( {category,setCategory}) => {

  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>explore our menu</h1>
        <p className='exploremenu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem architecto, est facere veniam velit as</p>
        <div className="exploremenu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploremenu-list-item'> 
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
