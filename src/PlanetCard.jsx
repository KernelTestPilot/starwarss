import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleInfo from "./PeopleInfo";

const PlanetCard =({planet, ishown}) => {
  console.log(planet)
  return(
 
    <div>
    {ishown ? 
      <article>
        <h2 className="card-header">{planet.name}</h2>
        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
      </article> :
      <article>
        <h2 className="card-header">{planet.name}</h2>
        <p className="card-text">
          Diameter (km): <strong>{planet.diameter}</strong><br />
          Gravity: <strong>{planet.gravity}</strong><br />
          Rotation period (hours): <strong>{planet.rotation_period}</strong><br />
          Orbital period (days): <strong>{planet.orbital_period}</strong><br />
          Population: <strong>{planet.population}</strong><br />
          Climate: <strong>{planet.climate}</strong><br />
          Terrain: <strong>{planet.terrain}</strong><br />
          Surface covered in water: <strong>{planet.surface_water}%</strong>
        </p>
        <h3 className="card-header">Residents: </h3>
        {planet.residents.length > 0 ? planet.residents.map((data, index) => (  
            <div key={index}>
            <PeopleInfo peoples={data}/>
            </div>
          )):
          (<div>Nothing found</div>)}<br />
        
        <h3 className="card-header">Movies: </h3>
        {planet.films.length > 0 ? planet.films.map((data, index) => ( 
          <div key={index}>
          <PeopleCardModal movies={data}/>
          </div>
        )):
          (<div>Nothing found</div>)}
      </article>}
    </div>
  )
}

export default PlanetCard;