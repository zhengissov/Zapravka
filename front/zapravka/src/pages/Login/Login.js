import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="containerLogin">
        <div className="column-A">
          <div className="content">
            <span className="titleLogin">Zapravka</span>
            <h6>Sign in</h6>
            <form>
              <input className="email" type="text" placeholder="Email:" />
              <img
                src={require("../../assets/email.png")}
                alt="email"
                id="email"
              />
              <span class="border" />
              <input className="password" type="text" placeholder="Password:" />
            </form>

            <h6>Forgot Password?</h6>
            <button className="signIn">SIGN IN</button>
            <h6>Don’t have an account? SIGNUP to ZAPRAVKA account.</h6>
          </div>
        </div>

        <div className="column-B" />
      </div>
    );
  }
}
export default Login;
