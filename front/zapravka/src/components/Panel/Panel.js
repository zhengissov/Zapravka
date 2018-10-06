import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = props => {
  console.log(props);
  let names;
  if (Object.keys(props)[0] === "cities") {
    names = props.cities.map(city => (
      <div className="grid-column" key={city.id}>
        <Link to="/gaspricelist">{city.name}</Link>
      </div>
    ));
  } else {
    names = props.brands.map(brand => (
      <div className="grid-column" key={brand.id}>
        <Link to="/gaspricelist">{brand.name}</Link>
      </div>
    ));
  }

  return (
    <div className="panel" cl>
      <div className="grid">{names}</div>
    </div>
  );
};

export default Panel;
