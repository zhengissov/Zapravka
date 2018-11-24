import React from "react";
import "./Gaspricemap.css";
const Gaspricemap = () => (
  <div className="container-map">
    <div className="gaspricemap">
      <h1>Gas Price Map</h1>
      <h3>
        Are you planning your next big road trip or thinking about making a big
        move across the country? Put your trip into perspective by using the
        Zapravka Gas Price Map so you know what to expect.
      </h3>
      <h1>Kazakhstan Gas Stations Price Heat Map</h1>
      <div className="google-map">
        {/* <GoogleApiWrapper /> */}
      </div>
      <h1>Zapravka Local Gas Prices Map</h1>
      <h3>
        Gas price average by state can vary greatly across the Kazakhstan. This
        is why Zapravka has created a map so you can access cheap gas by city
        name. You can view the map to show gas prices by state or zoom in for a
        local view of gas prices. When looking at your hometown, the Zapravka
        map even has gas stations pinpointed so you can see real-time prices
        available near you. Click on your local gas station on the fuel prices
        map to check out reviews and other information about each location.
      </h3>
      <h1>Find Cheap Gas Prices in the Kazakhstan</h1>
    </div>
  </div>
);

export default Gaspricemap;
