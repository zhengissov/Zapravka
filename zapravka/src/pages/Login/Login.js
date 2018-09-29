import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="containerLogin">
        <div className="column-A">
          <span className="titleLogin">Zapravka</span>
          <h6>SIGN IN</h6>
          <form className="inputs">
            <input className="email" type="text" placeholder="email" />
            <input className="password" type="text" />
          </form>

          <h6>Forgot Password?</h6>
          <button className="signIn">SIGN IN</button>
          <h6>Don’t have an account? SIGNUP to ZAPRAVKA account.</h6>
        </div>
        <div className="column-B">
          <h1>WELCOME BACK</h1>
          <h6>for finding cheap gas!</h6>
        </div>
      </div>
    );
  }
}
export default Login;
