/*global google*/
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    console.log("clikced");
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 43.222015,
          lng: 76.851249
      }}

        zoom={12}
        onClick={this.onMapClicked}
        // style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 43.234698, lng: 76.776581 }}
        />
        

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA6fxm0MdxP08ThGcEDi_vzTqfG_ly3zt0"
})(MapContainer);
