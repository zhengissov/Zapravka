import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg'

const Navbars = () => (
    <header>
      <div className="container">
        <div className="heading clearfix">
        <NavLink to="/"><img src={logo} class="logo" /></NavLink>
          <nav>
            <ul class="menu">
              <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
               <NavLink to='/gaspricelist'>Gas Price List</NavLink>
              </li>
              <li>
                <NavLink to="/gaspriceMap">Gas Price Map</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="login">Login</NavLink>
              </li>
              <li>
                <NavLink to='/register' className="register">Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
)

export default Navbars;