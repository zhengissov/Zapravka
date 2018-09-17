import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Link
} from 'react-router-dom';
import './Footer.css';

const Footer = () => (
   <footer>
      <div className="social-media">
         <img src={require('../../assets/vk.png')} alt="vk" />
         <img src={require('../../assets/facebook.png')} alt="facebook" />
         <img src={require('../../assets/instagram.png')} alt="instagram" />
         <img src={require('../../assets/twitter.png')} alt="twitter" />
      </div>
      <div className="navigations">
         <ul>
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/gaspricelist">Gas Price List</Link></li>
            <li><Link to="/gaspriceMap">Gas Price Map</Link></li>
         </ul>
         <ul>
            <li><Link to="/login" className="login">Login</Link></li>
            <li><Link to='/register' className="register">Register</Link></li>
         </ul>
      </div>
      <div className="bottom">
         <img src={require('../../assets/Logo-white.png')} alt="twitter" />
         <p>2018 Zapravka, All rights reserved</p>
      </div>
   </footer>
)

export default Footer;