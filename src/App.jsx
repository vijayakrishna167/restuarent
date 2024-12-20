import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import Appdown from './components/appdownload/Appdown'
import Loginpopup from './components/loginpopup/Loginpopup'

const App = () => {
  const [showlogin,setShowlogin]=useState(false)

  return (
    <>
    {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Appdown/>
    <Footer/>

    </>
    
  )
}

export default App
