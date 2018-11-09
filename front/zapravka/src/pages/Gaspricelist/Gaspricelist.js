import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Gaspricelist.css";
import Search from "../../components/Search/Search";
import Station from "../../components/Station/StationList";
import Panel from "../../components/Panel/Panel";
import { connect } from "react-redux";
import * as cityactions from "../../actions/citiesActions";
import * as stationactions from "../../actions/stationsActions";
import * as brandactions from "../../actions/brandsActions";

class Gaspricelist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onGetCities();
    this.props.onGetStations();
    this.props.onGetBrands();
  }

  render() {
    const { cities, stations, brands } = this.props;
    console.log(this.props.stations);
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
            <h3 className="result-header">
              Find Cheap Gas Prices in the Kazakhstan
            </h3>
            <Panel cities={cities} />
            <h3 className="result-header">Find Gas by Brand</h3>
            <Panel brands={brands} />
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

const mapStateToProps = state => ({
  cities: state.cities.items,
  stations: state.stations.items,
  brands: state.brands.items
});

const mapDispatchToProps = {
  onGetCities: cityactions.getCities,
  onGetStations: stationactions.getStations,
  onGetBrands: brandactions.getBrands
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gaspricelist)
);
