import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MainPage from './pages/Main';
import AboutUs from '../src/pages/AboutUs';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">MainPage</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutUs} />
        </div>
      </Router>
    );
  }
}

export default App;
