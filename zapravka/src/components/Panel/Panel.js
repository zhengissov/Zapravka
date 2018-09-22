import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = (props) => {
  console.log(props);
  const cityNames = props.cities.map(city => (
    <div className="grid-column" key={city.city_id}>
      <Link to="/gaspricelist">{city.city_long}</Link>
    </div>
  ));

  return (
    <div className="panel">
      <div className="grid">
        {cityNames}
      </div>
    </div>
  );
};

export default Panel;
