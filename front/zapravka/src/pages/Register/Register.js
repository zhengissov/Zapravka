import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import "./Register.css";
import { connect } from "react-redux";
import Request from 'superagent';

import * as registerActions from "../../actions/registerActions";
import * as loginActions from "../../actions/loginActions";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    this.props.onPostRegister(data);
    let userdata = this.props.registerUserData;
    console.log(userdata);
    if(userdata.code == 0){
      console.log("registered");
      let data = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.onPostLogin(data);
      let userdata = this.props.loginUserData;
      console.log(userdata);
      if(userdata.code === 1){
        this.setState( {error: userdata.message});
      }
      else if(userdata.code === 0){
        console.log(userdata)
        localStorage.setItem('token', userdata.token);
        localStorage.setItem('userdata', userdata.user);
        this.props.history.push({
          pathname: "/"
        });
      }
    }
    else{
      console.log(userdata.message);
      this.setState({ error: userdata.message });
    }
    // let url = "http://localhost:8000/zapravka/api/v1/auth/join/";

    // Request.post(url)
    //   .type("form")
    //   .send({ username: this.state.username })
    //   .send({ password1: this.state.password })
    //   .send({ password2: this.state.password })
    //   .send({ email: this.state.email })
    //   .then(callback => {
    //     if (callback.text == "success") {
    //       alert("asd");
    //       let url = "http://localhost:8000/api-token-auth/";
    //       Request.post(url)
    //         .type("form")
    //         .send({ username: this.state.username })
    //         .send({ password: this.state.password })
    //         .then(res => {
    //           console.log(res);
    //           console.log(res.body.token);
    //           localStorage.setItem("id_token", res.body.token);
    //           this.props.history.push({
    //             pathname: "/"
    //           });
    //         });
    //     }
    //     else{
    //       this.setState({ error: JSON.parse(callback.text).password2 });
    //     }
    //   });
  }

  render() {
    return (
      <div className="containerRegister">
        <div className="column-A">
          <span className="titleRegister">Zapravka</span>
          <h6>Getting started</h6>
          <form className="forma" onSubmit={this.handleSubmit}>
            <div className="inputs">
              <input
                className="name"
                name="username"
                type="text"
                placeholder="Username"
                autocomplete="off"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <input
                name="email"
                className="email"
                type="email"
                placeholder="Email"
                autocomplete="off"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <input
                name="password"
                className="password"
                type="password"
                placeholder="Password"
                autocomplete="off"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <h6 style={{color: '#FF4136'}}>{this.state.error}</h6>
            </div>

            <h6>By clicking SIGNUP button you accept Terms and Conditions</h6>
            <button className='signUpBtn'>SIGN UP</button>
          </form>
          <h6>Already have an account?</h6>
          <h6 style={{'color': '#00a2a2'}}>SIGNIN to your ZAPRAVKA account.</h6>
        </div>
        <div className="column-B-reg">
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerUserData: state.registerUserData.items,
  loginUserData: state.loginUserData.items
});

const mapDispatchToProps = {
  onPostRegister: registerActions.postRegister,
  onPostLogin: loginActions.postLogin

};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
