import React, { Component } from "react";
import "./Gaspricemap.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const stations = [
  {
    id: 1,
    latitude: 43.212335,
    longitude: 76.857356,
    price: 335
  },
  {
    id: 2,
    latitude: 43.197685,
    longitude: 76.870126,
    price: 325
  }
];

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 43.25, lng: 76.89 }}>
      {stations.map(station => (
        <Marker
          position={{ lat: station.latitude, lng: station.longitude }}
          label={"" + station.price}
          icon={{
            strokeColor: "red",
            url:
              "https://images.gasbuddy.com/images/websites/gasbuddy/maps/mappin_credit_highlight.png"
          }}
          onClick={() => props.handleMarkerClick(station.id)}
        />
      ))}
    </GoogleMap>
  ))
);

class Gaspricemap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMarkerClick = (id) => {
    this.props.history.push({
      pathname: "/station/"+id
    });
  }

  render() {
    return (
      <div className="container-map">
        <div className="gaspricemap">
          <h1 className="result-header">Gas Price Map</h1>
          <h3>
            Are you planning your next big road trip or thinking about making a
            big move across the country? Put your trip into perspective by using
            the Zapravka Gas Price Map so you know what to expect.
          </h3>
          <h1 class="map-title">Kazakhstan Gas Stations Price Heat Map</h1>
          <div className="google-map">
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6fxm0MdxP08ThGcEDi_vzTqfG_ly3zt0&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              handleMarkerClick={this.handleMarkerClick}
            />
          </div>
          <h1 className="result-header">Zapravka Local Gas Prices Map</h1>
          <h3>
            Gas price average by state can vary greatly across the Kazakhstan.
            This is why Zapravka has created a map so you can access cheap gas
            by city name. You can view the map to show gas prices by state or
            zoom in for a local view of gas prices. When looking at your
            hometown, the Zapravka map even has gas stations pinpointed so you
            can see real-time prices available near you. Click on your local gas
            station on the fuel prices map to check out reviews and other
            information about each location.
          </h3>
          <h1 className="map-title">Find Cheap Gas Prices in the Kazakhstan</h1>
        </div>
      </div>
    );
  }
}

export default Gaspricemap;
