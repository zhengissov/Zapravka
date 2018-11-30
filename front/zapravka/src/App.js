import React, { Component } from 'react';
import './App.css';
import {Route
} from 'react-router-dom';
import MainPage from './pages/Main/Main';
import AboutUs from './pages/About/AboutUs';
import Gaspricelist from './pages/Gaspricelist/Gaspricelist';
import Gaspricemap from './pages/Gaspricemap/Gaspricemap';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Station from './pages/Station/Station';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route path="/gaspricelist" component={Gaspricelist} />
        <Route path="/gaspriceMap" component={Gaspricemap} />
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path={'/station/:id'} component={Station} />
        <Footer />  
      </div>
    );
  }
}

export default App;
