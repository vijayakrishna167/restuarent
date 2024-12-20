import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowlogin}) => {
    const[currentstate,setCurrentstate]=useState("Login")
  return (
    <div className='loginpopup'>
      <form className='loginpopup-container'>
        <div className="loginpopup-title">
            <h2>{currentstate}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowlogin(false)}/>
        </div>
        <div className="loginpopup-input">
            {currentstate==="Login"?<></>:<input type="text" placeholder='your name' required />}
            <input type='email' placeholder='enter email' required />
            <input type='password' placeholder='enter password' required/>
        </div>
        <button>{currentstate==="sign up"?"create account":"login"}</button>
        <div className="loginpopup-condition">
            <input type='checkbox' required/>
            <p>By continuing, i agree the terms and conditions</p>
        </div>
        {currentstate==="Login"
        ?<p>create a new account? <span onClick={()=>setCurrentstate("sign up")}>click here</span></p>
        :<p>already have a account<span onClick={()=>setCurrentstate("Login")}>click here</span></p>}
        
      </form>
    </div>
  )
}

export default Loginpopup
