import React, { Component } from "react";
import "./Login.css";
import Request from 'superagent';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password: '',error: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    let url = "http://localhost:8000/api-token-auth/";
          Request.post(url)
            .type("form")
            .send({ username: this.state.username })
            .send({ password: this.state.password })
            .then(res => {
              console.log(res);
              console.log(res.body.token);
              localStorage.setItem("id_token", res.body.token);
              window.location = "http://localhost:3000";
            });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken() // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token) // handwaiving here
}

  render() {
    return (
      <div className="containerLogin">
        <div className="column-A">
          <div className="content">
            <span className="titleLogin">Zapravka</span>
            <h6>Sign in</h6>
            <form onSubmit={this.handleSubmit}>
              <input className="email" type="text" name="username"  value={this.state.username} placeholder="Email:" onChange={this.handleChange} required autocomplete="off"/>
              <img
                src={require("../../assets/email.png")}
                alt="email"
                id="email"
              />
              <span class="border" />
              <input className="password" type="text" name="password"  placeholder="Password:" value={this.state.password} onChange={this.handleChange} required autocomplete="off"/>
            </form>

            <h6>Forgot Password?</h6>
            <button className="signIn" onClick={this.handleSubmit}>SIGN IN</button>
            <h6>Don’t have an account? SIGNUP to ZAPRAVKA account.</h6>
          </div>
        </div>
        <h3>{this.state.error}</h3>
        <div className="column-B" />
      </div>
    );
  }
}
export default Login;
