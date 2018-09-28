import React, { Component } from "react";
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="containerRegister">
        <div className="column-A">
          <span className="titleRegister">
          Zapravka
          </span>
          <h6>Sign up</h6>
          <div className="inputs">
          <input className="name" type="text" placeholder = "Name"/>
          <input className="mobileNumber" type="text" placeholder = "Mobile Number"/>
          <input className="email" type="text" placeholder = "Email"/>
          <input className="password" type="text" placeholder = "Password"/>
          <input className="confirmPassword" type="text" placeholder = "Confirm password"/>
          </div>
          
          <h6>By clicking SIGNUP button you accept Terms and Conditions</h6>
          <button>SIGN UP</button>
          <h6>Already have an account? 
          SIGNIN to your ZAPRAVKA account.
          </h6>
        </div>
        <div className="column-B">
          <h1>ZAPRAVKA</h1>
          <h6>for finding cheap gas!</h6>
        </div>
      </div>
    );
  }
}
export default Register;
