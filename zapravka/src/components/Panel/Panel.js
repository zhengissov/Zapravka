import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = props => {
  let names;
  if (Object.keys(props)[0] === "cities") {
    names = props.cities.map(city => (
      <div className="grid-column" key={city.city_id}>
        <Link to="/gaspricelist">{city.city_long}</Link>
      </div>
    ));
  } else {
    names = props.brands.map(brand => (
      <div className="grid-column" key={brand.brand_id}>
        <Link to="/gaspricelist">{brand.brand_name}</Link>
      </div>
    ));
  }

  return (
    <div className="panel">
      <div className="grid">{names}</div>
    </div>
  );
};

export default Panel;
