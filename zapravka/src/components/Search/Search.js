import React, { Component } from "react";
import "./Search.css";
const Search = () => (
  <div className="search">
    <input type="text" id="cityName" placeholder="Search gas prices by city" />
    <select>
      <option value="92" selected="selected">
        92
      </option>
      <option value="95">95</option>
      <option value="98">98</option>
      <option value="Diesel">Diesel</option>
    </select>
    <button>Find Gas</button>
  </div>
);

export default Search;
