import React from "react";
import "./StationList.css";

const Station = props => {
  return props.stations.map(station => (
    <div id="station" key={station.id}>
      <div className="logoColumn">
        <div className="logoContainer">

          <img
            src={require("../../assets/" + station.img + ".png")}
            alt={station.name}
          />
        </div>
      </div>
      <div className="mainInfoColumn">
        <h3>{station.name}</h3>
        <div className="ratingContainer">
          <div className="star-rating" />
          <span>{station.rating}</span>
        </div>
        <div className="address">
          asdasd
          <br />
          qweqweqwe
        </div>
      </div>
      <div className="priceColumn">
        <p>270 тг</p>
      </div>
    </div>
  ));
};

export default Station;
