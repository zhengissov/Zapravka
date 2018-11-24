import React from 'react';
import {
   Link
} from 'react-router-dom';
import './Footer.css';
import { withRouter } from 'react-router';

const Footer = (props) => {

   if(props.router.route.location.pathname==="/login" ||
   props.router.route.location.pathname==="/register"){
      return null;
   }

   return (
   <footer>
      <div className="social-media">
         <img src={require('../../assets/icons/vk.png')} alt="vk" />
         <img src={require('../../assets/icons/facebook.png')} alt="facebook" />
         <img src={require('../../assets/icons/instagram.png')} alt="instagram" />
         <img src={require('../../assets/icons/twitter.png')} alt="twitter" />
      </div>
      <div className="navigations">
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gaspricelist">Gas Price List</Link></li>
            <li><Link to="/gaspriceMap">Gas Price Map</Link></li>
         </ul>
         <ul>
            <li><Link to="/login" className="login">Login</Link></li>
            <li><Link to='/register' className="register">Register</Link></li>
         </ul>
      </div>
      <div className="bottom">
         <img src={require('../../assets/logo/Logo-white.png')} alt="twitter" />
         <p>2018 Zapravka, All rights reserved</p>
      </div>
   </footer>
)
}

export default withRouter(Footer);