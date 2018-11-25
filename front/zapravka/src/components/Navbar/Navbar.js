import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.svg";

function loggedIn() {
  // Checks if there is a saved token and it's still valid
  let token = localStorage.getItem("token");
  console.log(token);
  // GEtting token from localstorage
  // return !!token && !this.isTokenExpired(token); // handwaiving here
}

console.log(this.loggedIn);

class Navbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location = "http://localhost:3000/";
  }

  render() {
    let token = localStorage.getItem("token");
    if (!token) {
      return (
        <header>
          <div className="container">
            <div className="heading clearfix">
              <NavLink to="/">
                <img src={logo} className="logo" alt="logo" />
              </NavLink>
              <nav>
                <ul className="menu">
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gaspricelist?search=almaty&fuel=1">Gas Price List</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gaspriceMap">Gas Price Map</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/about">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="register">
                      Register
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className="container">
            <div className="heading clearfix">
              <NavLink to="/">
                <img src={logo} className="logo" alt="logo" />
              </NavLink>
              <nav>
                <ul className="menu">
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gaspricelist?search=almaty&fuel=1">Gas Price List</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gaspriceMap">Gas Price Map</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/about">
                      About us
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/profile" className="login">
                      Profile
                    </NavLink>
                    <div class="dropdown-content">
                      <div>Logout</div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    }
  }
}

export default Navbars;
