import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleCardPlanet from "./PeopleCardPlanet";


const SpeciesCard =({species, ishown}) => {
return(
  <div>
  {ishown ? 
    <article>
      <h2 class="card-header">{species.name}</h2>
      <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
    </article> :
    <article>
      <h2 class="card-header">{species.name}</h2>
      <p class="card-text">Classification <b>{species.classification}</b><br /> 
        Language: <b>{species.language}</b><br />
        Height (cm): <b>{species.average_height}</b><br />
         Avg lifespan: <b>{species.average_lifespan}</b><br />
        Eye colors: <b>{species.eye_colors}</b><br />
         Skin colors: <b>{species.hair_colors}</b><br />
      </p>
      <h3 class="card-header">Movies: </h3>
      {
        species.films.length > 0 ? species.films.map((data, index) => (  
          <PeopleCardModal movies={data}/>
        )):
        ( <div>Nothing found</div> )
      }
      <PeopleCardPlanet planets={species.homeworld}/>
    </article>}
</div>
)

}

export default SpeciesCard;