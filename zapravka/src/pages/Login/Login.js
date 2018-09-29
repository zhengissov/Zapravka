import React, { Component } from "react";
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="containerLogin">
        <div className="column-A">
          <span className="titleLogin">
          Zapravka
          </span>
          <h6>Sign in</h6>
          <div className="inputs">
          <input className="email" type="text"/>
          <input className="password" type="text"/>
          </div>
          
          <h6>Forgot Password?</h6>
          <button>Sign In</button>
          <h6>Don’t have an account? 
          SIGNUP to ZAPRAVKA account.
          </h6>
        </div>
        <div className="column-B">
        </div>
      </div>
    );
  }
}
export default Login;
