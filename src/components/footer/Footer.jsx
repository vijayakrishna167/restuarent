import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam natus aliquam ab asperiores veniam atque totam odit facere ex laudantium. Doloremque aliquid veritatis eos accusantium, quidem facilis animi fugiat nostrum.</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9289222029</li>
                    <li>warforbreath@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 &copy& all rights reserved
        </p>
      
    </div>
  )
}

export default Footer
