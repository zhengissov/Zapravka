import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Station.css";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import * as reviewActions from "../../actions/reviewActions";
import * as nearbyActions from "../../actions/nearbyActions";
import * as stationsActions from "../../actions/stationsActions";
import { Link } from "react-router-dom";

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
    this.state = {
      singleStation: [],
      show: false,
      selectedIcon: 0,
      reviewText: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.location);
    // if (nextProps.location.state.changedCity !== this.props.location.state.changedCity) {
    //   console.log("updatedcity");
    //   window.location.reload();
    // }
  }

  componentDidMount() {
    this.props.onGetSingleStation(this.props.match.params.id);
    this.props.onGetReviews(this.props.match.params.id);
    this.props.onPostNearby({
      latitude: parseFloat(station.latitude),
      longitude: parseFloat(station.longitude)
    });
    console.log({ latitude: station.latitude, longitude: station.longitude });
  }

  openModel = () => {
    this.setState({ show: true });
  };

  closeModel = () => {
    this.setState({ show: false });
  };

  renderRatingImages(rating) {
    if (rating == 1) {
      return (
        <div>
          <img src={require("../../assets/icons/1.svg")} alt="" />
          <img
            src={require("../../assets/icons/3.svg")}
            alt=""
            className="blur"
          />
          <img
            src={require("../../assets/icons/5.svg")}
            alt=""
            className="blur"
          />
        </div>
      );
    } else if (rating == 3) {
      return (
        <div>
          <img
            src={require("../../assets/icons/1.svg")}
            alt=""
            className="blur"
          />
          <img src={require("../../assets/icons/3.svg")} alt="" />
          <img
            src={require("../../assets/icons/5.svg")}
            alt=""
            className="blur"
          />
        </div>
      );
    } else if (rating == 5) {
      return (
        <div>
          <img
            src={require("../../assets/icons/1.svg")}
            alt=""
            className="blur"
          />
          <img
            src={require("../../assets/icons/3.svg")}
            alt=""
            className="blur"
          />
          <img src={require("../../assets/icons/5.svg")} alt="" />
        </div>
      );
    }
  }
  renderFuels(fuels) {
    if (fuels) {
      return fuels.map(fuel => (
        <div className="panel">
          <div className="fuelStats">
            <h2>{fuel.fuel.toUpperCase()}</h2>
            <h1>{fuel.price} тг</h1>
          </div>
        </div>
      ));
    } else {
      <div>asd</div>;
    }
  }

  ratingClicked(element){
    console.log(element.target.alt);
    this.setState({selectedIcon: element.target.alt});
  }

  handleInputChange = (event) =>{
    this.setState({reviewText: event.target.value});
  }

  sendReview = () =>{
    
    console.log(this.state.selectedIcon);
    console.log(this.state.reviewText);
  }
  render() {
    const { reviews, nearby, singleStation } = this.props;
    //  const queryString = require('query-string');
    //  let parsed = queryString.parse(this.props.location.search);
    const fuels = singleStation.fuels;
    let token = localStorage.getItem("token");
    return (
      <div className="container">
        <div className="station">
          <div className="columnA">
            <div id="station" key={singleStation.id}>
              <div className="logoColumn">
                <div className="logoContainer">
                  <img
                    src={require("../../assets/logo/" + "kmg" + ".png")}
                    alt={singleStation.station_name}
                  />
                </div>
              </div>
              <div className="mainInfoColumn">
                <h3>{singleStation.station_name}</h3>
                <div className="ratingContainer">
                  <div className="star-rating" />
                  <StarRatings
                    rating={singleStation.rating}
                    starRatedColor="#0097A9"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <span>({singleStation.rating_counter})</span>
                </div>
                <div className="address">{singleStation.address}</div>
              </div>
              <div className="phoneColumn">
                <p>{singleStation.tel}</p>
              </div>
            </div>
            <div className="fuelCards">{this.renderFuels(fuels)}</div>
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
                  <div className="writeReview" onClick={this.openModel}>
                    {token ? (
                      <button>Write a Review</button>
                    ) : (
                      <Link to="/login">
                        <button>Login to Write a Review</button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="reviewContainer">
                  <div className="reviewItemContainer">
                    {reviews.map(review => (
                      <div className="reviewItemHeader">
                        <div className="reviewUser">
                          <div className="avatar">
                            <img
                              src={require("../../assets/icons/avatar.jpg")}
                              alt="avatar"
                            />
                          </div>
                          <div className="details">
                            <div className="name">{review.user}</div>
                            <div className="data">Sep 13 2018</div>
                          </div>
                        </div>
                        <div className="reviewItemRating">
                          {this.renderRatingImages(review.status)}

                          <div className="reviewItemContent">
                            <div className="reviewItemContentText">
                              {review.body}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columnB">
            <h3 className="result-header">Nearby Stations</h3>
            {nearby.map(station => (
              <Link
                to={{
                  pathname: `/station/${station.id}`,
                  state: { changedCity: station.id }
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="stationItem" key={station.id}>
                  <div className="logoColumn">
                    <div className="logoContainer">
                      <img
                        src={require("../../assets/logo/" +
                          station.image_path +
                          ".png")}
                        alt={station.station_name}
                      />
                    </div>
                  </div>
                  <div className="mainInfoColumn">
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
                    <div className="address">{station.address}</div>
                  </div>
                  <div className="priceColumn">
                    <p>270 тг</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={
            this.state.show ? "modal display-block" : "modal display-none"
          }
        >
          <div>
            <button class="closeModelButton" onClick={this.closeModel}/>
            <div className="modelBody">
              <div className="modelStationInfo">
                <div id="station" key={singleStation.id}>
                  <div className="logoColumn">
                    <div className="logoContainer">
                      <img
                        src={require("../../assets/logo/" + "kmg" + ".png")}
                        alt={singleStation.station_name}
                      />
                    </div>
                  </div>
                  <div className="mainInfoColumn">
                    <h3>{singleStation.station_name}</h3>
                    <div className="ratingContainer">
                      <div className="star-rating" />
                      <StarRatings
                        rating={singleStation.rating}
                        starRatedColor="#0097A9"
                        starDimension="20px"
                        starSpacing="2px"
                      />
                      <span>({singleStation.rating_counter})</span>
                    </div>
                    <div className="address">{singleStation.address}</div>
                  </div>
                </div>
              </div>
              <div className="modelStationRating">
                <p className="messageReviev">
                  How would you rate this station?
                </p>
                <div className="modelRatingContainer">
                  <div className="ratingColumn">
                    <div className="value">
                      <img src={require("../../assets/icons/1.svg")} alt="1" onClick={(event) => this.ratingClicked(event)}  className={(this.state.selectedIcon=="1" ? 'selected' : 'blur')}/>
                      <p> Bad </p>
                    </div>
                  </div>
                  <div className="ratingColumn">
                    <div className="value">
                      <img src={require("../../assets/icons/3.svg")} alt="3" onClick={(event) => this.ratingClicked(event)} className={ (this.state.selectedIcon=="3" ? 'selected' : 'blur')}/>
                      <p>Okay</p>
                    </div>
                  </div>
                  <div className="ratingColumn">
                    <div className="value">
                      <img src={require("../../assets/icons/5.svg")} alt="5" onClick={(event) => this.ratingClicked(event)} className={(this.state.selectedIcon=="5" ? 'selected' : 'blur')}/>
                      <p>Good</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modalReviewContainer">
                <div className="messageReviev">Write a short review</div>
                <textarea name="modelReviewText" id="modelReviewText" value={this.state.reviewText} onChange={this.handleInputChange}/>
              </div>
            </div>

            <div className="buttons">
              <button className="cancelButton" onClick={this.closeModel}>Cancel</button>
              <button className="sendButton" onClick={this.sendReview}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.items,
  nearby: state.nearby.items,
  singleStation: state.singleStation.items
});

const mapDispatchToProps = {
  onGetReviews: reviewActions.getReviews,
  onPostNearby: nearbyActions.postNearby,
  onGetSingleStation: stationsActions.getSingleStation
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Station)
);
