import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Station.css";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import * as stationactions from "../../actions/stationsActions";
import * as brandactions from "../../actions/brandsActions";

const station = {
  id: 1,
  name: "KazMunaiGas",
  brand_id: 1,
  image_path: "kmg",
  star_rating: 4.7,
  rating_count: 35,
  address: {
    line_1: "175 Kabanbai Batyr",
    region: "Almaty"
  },
  phone: "678-973-2117",
  latitude: 33.7443084,
  longitude: -84.3795168,
  amentities: ["store", "restroom", "atm", "has_fuel", "has_diesel"],
  fuels: [
    { name: "AI-92", price: 250 },
    { name: "AI-95", price: 244 },
    { name: "AI-98", price: 257 },
    { name: "Diesel", price: 202 }
  ]
};

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //  this.props.onGetStations();
    //  this.props.onGetBrands();
  }

  render() {
    //  const { cities, stations, brands } = this.props;
    //  const queryString = require('query-string');
    //  let parsed = queryString.parse(this.props.location.search);
    return (
      <div className="container">
        <div className="station">
          <div className="columnA">
            <div id="station" key={station.id}>
              <div className="logoColumn">
                <div className="logoContainer">
                  <img
                    src={require("../../assets/logo/" +
                      station.image_path +
                      ".png")}
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
                    starDimension="20px"
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
              <div className="phoneColumn">
                <p>404-688-2055</p>
              </div>
            </div>
            <div className="fuelCards">
              {station.fuels.map(fuel => (
                <div className="panel">
                  <div className="fuelStats">
                    <h2>{fuel.name}</h2>
                    <h1>{fuel.price} тг</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="features">
              <h1>Features</h1>
              <div className="features-list panel">
                {station.amentities.map(feature => (
                  <div className="feature">
                    <img
                      src={require("../../assets/features/" + feature + ".png")}
                      alt={station.name}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="columnB">
            <h3 className="result-header">Nearby Stations</h3>
            <div className="stationItem" key={station.id}>
              <div className="logoColumn">
                <div className="logoContainer">
                  <img
                    src={require("../../assets/logo/" +
                      station.image_path +
                      ".png")}
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.stations.items,
  brands: state.brands.items
});

const mapDispatchToProps = {
  onGetStations: stationactions.getStations,
  onGetBrands: brandactions.getBrands
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Station)
);
