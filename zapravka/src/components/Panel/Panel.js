import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css";

const cities = [
  { id: 1, name: "Aktau" },
  { id: 2, name: "Aktobe" },
  { id: 3, name: "Almaty" },
  { id: 4, name: "Arkalyk" },
  { id: 5, name: "Astana" },
  { id: 6, name: "Atyrau" },
  { id: 7, name: "Baikonur" },
  { id: 8, name: "Balqash" },
  { id: 9, name: "Ekibastuz" },
  { id: 10, name: "Aktau" },
  { id: 11, name: "Aktobe" },
  { id: 12, name: "Almaty" },
  { id: 13, name: "Arkalyk" },
  { id: 14, name: "Astana" },
  { id: 15, name: "Atyrau" },
  { id: 16, name: "Baikonur" },
  { id: 17, name: "Balqash" },
  { id: 18, name: "Ekibastuz" }
];

const Panel = () => {
  const cityNames = cities.map(city => (
    <div className="grid-column" key={city.id}>
      <Link to="/gaspricelist">{city.name}</Link>
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
