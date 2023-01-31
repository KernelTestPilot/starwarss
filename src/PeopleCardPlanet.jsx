import React from "react";
import { useEffect, useState } from 'react';

const PeopleCardPlanet =({planets}) => {
  const [planet, setPlanetData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  

  useEffect(() => {
   Promise.all([
      fetch(planets),
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
          {
      // HOVER ME ->
}
       <h1 class="small-card-header">{movie.title}</h1> 
      </div>
      {showMessage &&   <div class="small-card">Director: {movie.director} Producer: {movie.producer}    
      <h3 class="small-card-header">Title: {movie.title}</h3>
        <p class="small-card-text">{movie.director}, {movie.release_date}</p>
      </div>
      }
  </div>

)

}

export default PeopleCardPlanet;