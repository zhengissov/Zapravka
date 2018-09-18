import React, { Component } from "react";
import "./Search.css";
import {withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      gasType: "92"
    };
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
    console.log(this.state.inputText);
    console.log(this.state.gasType);
    this.props.history.push({
      pathname: "/gaspricelist",
      search: "?search=" + this.state.inputText + "&fuel=" + this.state.gasType,
      state: { details: this.state }
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
          placeholder="Search gas prices by city"
        />
        <select
         style={this.props.searchBigStyleSelect}
          value={this.state.gasType}
          onChange={event => this.selectChangedHandler(event)}
        >
          <option value="92" style={this.props.searchBigStyleOption}>
            92
          </option>
          <option value="95" style={this.props.searchBigStyleOption}>95</option>
          <option value="98" style={this.props.searchBigStyleOption}>98</option>
          <option value="Diesel" style={this.props.searchBigStyleOption}>Diesel</option>
        </select>
        <button onClick={this.btnClicked}>Find Gas</button>
      </div>
    );
  }
}
export default withRouter(Search);