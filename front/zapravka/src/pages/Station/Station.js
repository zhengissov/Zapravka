import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Station.css";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import * as reviewActions from "../../actions/reviewActions";

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

const nearby = [
  {
    id: 2,
    name: "Helios",
    brand_id: 2,
    image_path: "helios",
    star_rating: 4.3,
    rating_count: 25,
    address: {
      line_1: "175 Kabanbai Batyr",
      region: "Almaty"
    },
    phone: "678-973-2117",
    latitude: 53.744308400248,
    longitude: -74.379516839981,
    amentities: ["store", "restrooms", "atm", "has_fuel", "has_diesel"],
    fuels: ["AI-92", "AI-95", "AI-98", "Diesel"]
  },
  {
    id: 2,
    name: "Helios",
    brand_id: 2,
    image_path: "helios",
    star_rating: 4.3,
    rating_count: 25,
    address: {
      line_1: "175 Kabanbai Batyr",
      region: "Almaty"
    },
    phone: "678-973-2117",
    latitude: 53.744308400248,
    longitude: -74.379516839981,
    amentities: ["store", "restrooms", "atm", "has_fuel", "has_diesel"],
    fuels: ["AI-92", "AI-95", "AI-98", "Diesel"]
  }
];

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
     this.props.onGetReviews(this.props.match.params.id);
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

            <div id="reviews">
              <h1>Reviews</h1>
              <div className="reviews panel">
                <div className="rating-header">
                  <div className="averageRating">3.3</div>
                  <div className="rating-container">
                    <StarRatings
                      rating={station.star_rating}
                      starRatedColor="#0097A9"
                      starDimension="14px"
                      starSpacing="0.5px"
                    />
                    <br />
                    <span>10 reviews</span>
                  </div>
                  <div className="writeReview">
                    <button>Write a Review</button>
                  </div>
                </div>
                <div className="reviewContainer">
                  <div className="reviewItemContainer">
                    <div className="reviewItemHeader">
                      <div className="reviewUser">
                        <div className="avatar">
                          <img
                           src={require("../../assets/icons/avatar.jpg")}
                            alt="avatar"
                          />
                        </div>
                        <div className="details">
                          <div className="name">Aydos</div>
                          <div className="data">Sep 13 2018</div>
                        </div>
                      </div>
                      <div className="reviewItemRating">
                        <img src={require("../../assets/icons/1.svg")} alt=""/>
                        <img src={require("../../assets/icons/3.svg")} alt=""/>
                        <img src={require("../../assets/icons/5.svg")} alt=""/>

                        <div className="reviewItemContent">
                      <div className="reviewItemContentText">
                      Coffee is good prices are high
                      </div>
                    </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="reviewItemContainer" />
                  <div className="reviewItemContainer" />
                  <div className="reviewItemContainer" />
                </div>
              </div>
            </div>
          </div>
          <div className="columnB">
            <h3 className="result-header">Nearby Stations</h3>

            {nearby.map(station => (
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.items
});

const mapDispatchToProps = {
  onGetReviews: reviewActions.getReviews
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Station)
);
