import React from "react";
import "./StationList.css";
import StarRatings from "react-star-ratings";

const Station = props => {
  return props.stations.map(station => (
    <div id="station" key={station.id}>
      <div className="logoColumn">
        <div className="logoContainer">

          <img
            src={require("../../assets/" + station.image_path + ".png")}
            alt={station.name}
          />
        </div>
      </div>
      <div className="mainInfoColumn">
        <h3>{station.name}</h3>
        <div className="ratingContainer">
          <div className="star-rating" />
          <StarRatings
        rating={station.star_rating}
        starRatedColor="#0097A9"
        starDimension="15px"
        starSpacing="2px"
      />
          <span>({station.rating_count})</span>
        </div>
        <div className="address">
        {station.address.line_1}
          <br />
          {station.address.region}
        </div>
      </div>
      <div className="priceColumn">
        <p>270 тг</p>
      </div>
    </div>
  ));
};

export default Station;
