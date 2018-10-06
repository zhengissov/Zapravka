import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    let url = "http://localhost:8000/zapravka/api/v1/auth/join/";
    Request.post(url)
      .type("form")
      .send({ username: this.state.username })
      .send({ password1: this.state.password })
      .send({ password2: this.state.password })
      .send({ email: this.state.email })
      .then(callback => {
        console.log(callback.text);
        if (callback.text == "success") {
          alert("asd");
          let url = "http://localhost:8000/api-token-auth/";
          Request.post(url)
            .type("form")
            .send({ username: this.state.username })
            .send({ password: this.state.password })
            .then(res => {
              console.log(res);
              console.log(res.body.token);
              localStorage.setItem("id_token", res.body.token);
              window.location = "http://localhost:3000/profile";
            });
        }
        this.setState({ error: "error" });
      });
  }

  render() {
    return (
      <div className="containerRegister">
        <div className="column-A">
          <span className="titleRegister">Zapravka</span>
          <h6>Sign up</h6>
          <form className="forma" onSubmit={this.handleSubmit}>
            <div className="inputs">
              <input
                className="name"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                className="email"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                className="password"
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                className="confirmPassword"
                type="text"
                placeholder="Confirm password"
                value={this.state.confirm_password}
                onChange={this.handleChange}
              />
            </div>

            <h6>By clicking SIGNUP button you accept Terms and Conditions</h6>
            <button>SIGN UP</button>
          </form>
          <h6>Already have an account? SIGNIN to your ZAPRAVKA account.</h6>
        </div>
        <div className="column-B-reg">
          <h1>ZAPRAVKA</h1>
          <h6>for finding cheap gas!</h6>
        </div>
      </div>
    );
  }
}
export default Register;
