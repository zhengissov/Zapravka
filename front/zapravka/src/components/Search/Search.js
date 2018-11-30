import React, { Component } from "react";
import "./Search.css";
import {withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      gasType: "1"
    };
  }
  componentDidMount(){
    this.setState({
      inputText: this.props.search
    })
  }

  inputChangedHandler(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  selectChangedHandler(event) {
    this.setState({
      gasType: event.target.value
    });
  }

  btnClicked = () => {
    this.props.history.push({
      pathname: "/gaspricelist",
      search: "?search=" + this.state.inputText + "&fuel=" + this.state.gasType,
      state: { details: this.state, changedCity: 0 }
    });
  };

  render() {
    return (
      <div style= {this.props.searchBigStyle} className="search">
        <input
          style={this.props.searchBigStyleInput}
          onChange={event => this.inputChangedHandler(event)}
          type="text"
          id="cityName"
          value={this.state.inputText}
          placeholder="Search gas prices by city"
        />
        <select
         style={this.props.searchBigStyleSelect}
          value={this.state.gasType}
          onChange={event => this.selectChangedHandler(event)}
        >
          <option value="1" style={this.props.searchBigStyleOption}>
            92
          </option>
          <option value="2" style={this.props.searchBigStyleOption}>95</option>
          <option value="3" style={this.props.searchBigStyleOption}>98</option>
          <option value="4" style={this.props.searchBigStyleOption}>Diesel</option>
        </select>
        <button onClick={this.btnClicked}>Find Gas</button>
      </div>
    );
  }
}
export default withRouter(Search);
