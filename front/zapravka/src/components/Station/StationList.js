import React, { Component } from "react";
import "./StationList.css";
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';

class StationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleStationClick(id) {
    console.log(id);
    // this.props.history.push({
    //   pathname: "/gaspricelist",
    //   search: "?search=" + this.state.inputText + "&fuel=" + this.state.gasType,
    //   state: { details: this.state }
    // });
  }
  render() {
    return this.props.stations.map(station => (
      <div id="station" key={station.id}>
        <div className="logoColumn">
          <div className="logoContainer">
            <img
              src={require("../../assets/logo/" + station.image_path + ".png")}
              alt={station.name}
            />
          </div>
        </div>

        <Link to={{pathname: `/station/${station.id}`, state: {changedCity: true}}} style={{ textDecoration: 'none', color: 'black'}}>
        <div className="mainInfoColumn" onClick={() => this.handleStationClick(station.id)}>
          <h3>{station.station_name}</h3>
          <div className="ratingContainer">
            <div className="star-rating" />
            <StarRatings
              rating={station.rating}
              starRatedColor="#0097A9"
              starDimension="15px"
              starSpacing="2px"
            />
            <span>({station.rating_counter})</span>
          </div>
          <div className="address">
            {station.address}
          </div>
        </div>
        </Link>
        <div className="priceColumn">
          <p>{station.price} тг</p>
        </div>
      </div>
    ));
  }
}

export default StationList;
