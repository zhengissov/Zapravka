import React from "react";

import "./About.css";
const AboutUs = () => (
  <div>
    <section id="sectionA">
      <div className="container">
        <div className="titles">
          <div className="titles1_first">
            About Us
            </div>
          <div className="gridd">
          <div className="titles1_second">
          Here’s the text about us, what we do
          <h5>Lorem Ipsum bla bla bla lorem ipsum bla bla bla lorem lpsum bla bla bla  ahaha sometimes it moves so fast sometimes if moves so slow if you stop to ask it’s already past y  u missed it if you don’t you missed if you don’t already know already know already know.</h5>
          </div>
          <div>
          <img src={require("../../assets/scott.jpg")}className="about"/></div>
          </div>
        </div>
      </div>
    </section>
    <section id="sectionC">
      <div className="container">
        <div className="title">Our Team</div>
        <div className="columns">
          <div className="column">
            <img src={require("../../assets/ava.png")} alt="" />
            <h3>Aidos Zhengissov</h3>
            <p>Lorem ipsum ipsum ipsum</p>
          </div>
          <div className="column">
            <img src={require("../../assets/ava.png")} alt="" />
            <h3>Makpal Serikkalieva</h3>
            <p>Lorem ipsum ipsum ipsum</p>
          </div>
          <div className="column">
            <img src={require("../../assets/ava.png")} alt="" />
            <h3>Daryn Zhengiskhanov</h3>
            <p>Lorem ipsum ipsum ipsum</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
