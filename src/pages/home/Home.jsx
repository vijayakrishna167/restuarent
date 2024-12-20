import React, { useState } from 'react'
import'./home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
const Home = () => {
    const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home
