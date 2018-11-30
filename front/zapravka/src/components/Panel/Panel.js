import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css";

const citiesData = [
  "Aktau",
  "Aktobe",
  "Almaty",
  "Astana",
  "Atyrau",
  "Baikonur",
  "Karagandy",
  "Kokshetau",
  "Kostanay",
  "Kyzylorda",
  "Oral",
  "Oskemen",
  "Pavlodar",
  "Semey",
  "Shymkent",
  "Taldykorgan",
  "Taraz",
  "Turkistan",
  "Zhanaozen",
  "Zhezkazgan"
];

const Panel = props => {
  let names;
  if (Object.keys(props)[0] === "cities") {
    names = citiesData.map((city, ind) => (
      <div className="grid-column" key={ind}>
        <Link
          to={{ pathname: `/gaspricelist`, search: `?search=${city}&fuel=1`, state: {changedCity: city}}}
        >
          {city}
        </Link>
        {/* <Link to={`/gaspricelist?search=${city}&fuel=1/`}>{city}</Link> */}

        {/* <Link to={{pathname: `/station/${station.id}`, state: {changedCity: true}}} style={{ textDecoration: 'none', color: 'black'}}></Link> */}
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
    <div className="panel">
      <div className="grid" style={{ padding: "30px" }}>
        {names}
      </div>
    </div>
  );
};

export default Panel;
