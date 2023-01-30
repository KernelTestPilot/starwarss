import React from "react";

const PlanetCard =({planet, ishown}) => {
  return(
    <div>
    {ishown ? 
      <article>
        <h2 class="card-header">{planet.name}</h2>
        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
      </article> :
      <article>
        <h2 class="card-header">{planet.name}</h2>
        <p class="card-text">
          Diameter (km): <strong>{planet.diameter}</strong><br />
          Gravity: <strong>{planet.gravity}</strong><br />
          Rotation period (hours): <strong>{planet.rotation_period}</strong><br />
          Orbital period (days): <strong>{planet.orbital_period}</strong><br />
          Population: <strong>{planet.population}</strong><br />
          Climate: <strong>{planet.climate}</strong><br />
          Terrain: <strong>{planet.terrain}</strong><br />
          Surface covered in water: <strong>{planet.surface_water}%</strong><hr />
        </p>
      </article>}
    </div>
  )
}

export default PlanetCard;