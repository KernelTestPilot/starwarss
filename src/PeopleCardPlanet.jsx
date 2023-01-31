import React from "react";
import { useEffect, useState } from 'react';

const PeopleCardPlanet =({planets}) => {
  const [planet, setPlanetData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  

  useEffect(() => {
   Promise.all([
      fetch(`${planets}`),
   ])
    .then(([resPlanets]) =>
    Promise.all([resPlanets.json()])
    )
    .then(([planetData]) => {
      setPlanetData(planetData);
    });
  },[]);
  
return(
  <div>
      <div
        className="hoverableDiv"
        onMouseEnter={() => {
          setShowMessage(true);
        }}
        onMouseLeave={() => {
          setShowMessage(false);
        }}
      >

<img className="homeworld-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Arcadian_Planet_Delta.png/900px-Arcadian_Planet_Delta.png?20191222104207" title={planet.name}></img>
      </div>
      {showMessage &&   <div className="small-card">  
      <h3 className="small-card-header">{planet.name}</h3>
      <p className="small-card-text">
          Diameter (km): <strong>{planet.diameter}</strong><br />
          Gravity: <strong>{planet.gravity}</strong><br />
          Rotation period (hours): <strong>{planet.rotation_period}</strong><br />
          Orbital period (days): <strong>{planet.orbital_period}</strong><br />
          Population: <strong>{planet.population}</strong><br />
          Climate: <strong>{planet.climate}</strong><br />
          Terrain: <strong>{planet.terrain}</strong><br />
          Surface covered in water: <strong>{planet.surface_water}%</strong>
          </p>
      </div>
      }
  </div>

)

}

export default PeopleCardPlanet;