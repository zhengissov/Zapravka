import React, { Component } from "react";
import "./Login.css";
import Request from "superagent";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: "" };

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

        this.props.history.push({
          pathname: "/"
        });

      })
      .catch(err => {
        this.setState({
          error: JSON.parse(err.response.text).non_field_errors[0]
        });
      });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  render() {
    return (
      <div className="containerLogin">
        <div className="column-A">
          <div className="content">
            <span className="titleLogin">Zapravka</span>
            <h6>Sign in</h6>
            <form className="forma" onSubmit={this.handleSubmit}>
              <div className="inputs">
                <input
                  className="email"
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Email:"
                  onChange={this.handleChange}
                  required
                  autocomplete="off"
                />

                <input
                  className="password"
                  type="text"
                  name="password"
                  placeholder="Password:"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                  autocomplete="off"
                />
                <h6>{this.state.error}</h6>
              </div>
              <h6>Forgot Password?</h6>
              <button className="signInBtn" onClick={this.handleSubmit}>
                SIGN IN
              </button>
            </form>
            <h6>Don’t have an account? </h6>
            <h6 style={{'color': '#76BF38'}}>SIGNUP to ZAPRAVKA account.</h6>
          </div>
        </div>
        <div className="column-B-login">
        </div>
      </div>
    );
  }
}
export default Login;
