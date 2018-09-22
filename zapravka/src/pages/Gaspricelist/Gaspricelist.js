import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Gaspricelist.css";
import Search from "../../components/Search/Search";
import Station from "../../components/Station/Station";
import Panel from "../../components/Panel/Panel";

const stations = [
  {
    id: 1,
    name: "KazMunaiGas",
    img: "kmg",
    rating: 4.7,
    ratingCounter: 35,
    address: "175 Kabanbai Batyr",
    city: "Almaty",
    tel: "678-973-2117",
    latitude: 33.744308400248,
    longitude: -84.379516839981
  },
  {
    id: 2,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  },
  {
    id: 3,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  },
  {
    id: 4,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  },
  {
    id: 5,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  },
  {
    id: 6,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  },
  {
    id: 7,
    name: "Helios",
    img: "helios",
    rating: 4.3,
    ratingCounter: 25,
    address: "175 Naurysbai Batyr",
    city: "Almaty",
    tel: "678-973-2118",
    latitude: 53.744308400248,
    longitude: -74.379516839981
  }
];

const cities = [
  {
    city_id: 1,
    city_long: "Almaty",
    region_long: "Almaty",
    region_id: 1
  },
  {
    city_id: 2,
    city_long: "Astana",
    region_long: "Astana",
    region_id: 2
  },
  {
    city_id: 3,
    city_long: "Atyrau",
    region_long: "Atyrau",
    region_id: 3
  }
];

class Gaspricelist extends Component {
  render() {
    return (
      <div className="container">
        <div className="gaspricelist">
          <div className="columnA">
            <Search
              searchBigStyle={searchStyle}
              searchBigStyleInput={searchStyleInput}
              searchBigStyleOption={searchStyleOption}
              searchBigStyleSelect={searchStyleSelect}
            />
            <div className="results-header">
              <h3 className="result-header">Gas Prices in Almaty</h3>
            </div>

            <div>
                <Station stations={stations} />
            </div>
          </div>
          <div className="columnB">
            <h3>Find Cheap Gas Prices in the Kazakhstan</h3>
            <Panel cities={cities} />
            <h1>asdasdasd</h1>
            <p>asd</p>
          </div>
        </div>
      </div>
    );
  }
}

const searchStyle = {
  width: "670px",
  height: "42px",
  gridTemplateColumns: "65% 17.5% 17.5%",
  marginTop: "25px"
};

const searchStyleInput = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid #808080",
  color: "#000",
  fontSize: "22px",
  paddingLeft: "15px"
};

const searchStyleSelect = {
  background: "rgba(255, 255, 255, 0.2)",
  borderTop: "1px solid #808080",
  borderBottom: "1px solid #808080",
  fontSize: "18px",
  color: "#000",
  textAlignLast: "center"
};

const searchStyleOption = {
  background: "rgba(0, 0, 0, 0.5)",
  textAlignLast: "center"
};

export default withRouter(Gaspricelist);
