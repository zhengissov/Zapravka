import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import logo from '../../assets/Logo-dark.svg';
import logo2 from '../../assets/shop.svg';

import './Main.css';
const MainPage = () => (
  <div>
    <section id="sectionA">
      <div className="container">
        <div class="titles">
          <div class="titles_first">
            Find Your Perfect Pit Stop
            </div>
          <div className="titles_second">
            Find the Best Gas Prices and everything else you need to fuel your journey
            </div>
        </div>
        <Search />
      </div>
    </section>
    <section id="sectionB">
      <div className="container">
        <div className="rectangle">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <img src={logo2} alt="logo2" className="logo shop" />
          </div>
          <div className="title">
            THE BIGGEST EVERYDAY SAVINGS ON GAS ANYWHERE!
          </div>
          <div className="title2">
            Choose the best gas station.
          </div>
        </div>
      </div>
    </section>
    <section id="sectionC">
      <div className="container">
        <div className="title">
          OUR BENEFITS
        </div>
        <div className="columns">
          <div className="column">
            <img src={require('../../assets/Pump.svg')} alt="" />
            <h3>PUMP</h3>
            <p>
              Find a gas station near you quickly
            </p>
          </div>
          <div className="column">
            <img src={require('../../assets/Save.svg')} alt="" />
            <h3>SAVE</h3>
            <p>
              Save up earnings  by choosing cheapest one
            </p>
          </div>
          <div className="column">
            <img src={require('../../assets/Rate.svg')} alt="" />
            <h3>RATE</h3>
            <p>
              Choose the best according to marks of users
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default MainPage;