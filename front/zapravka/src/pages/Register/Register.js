import React, { Component } from "react";
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="containerRegister" >
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
<<<<<<< HEAD:zapravka/src/pages/Register/Register.js
        <div className="column-B">
=======
        <div className="column-B-reg">
          <h1>ZAPRAVKA</h1>
          <h6>for finding cheap gas!</h6>
>>>>>>> ba93e242d55bbd180933e58875e2607fd96951e0:front/zapravka/src/pages/Register/Register.js
        </div>
      </div>
    );
  }
}
export default Register;
