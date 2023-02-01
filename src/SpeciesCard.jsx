import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleCardPlanet from "./PeopleCardPlanet";


const SpeciesCard =({species, ishown}) => {
return(
  <div className="content-card">
  {ishown ? 
    <article>
      <h2 className="card-header">{species.name}</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/1503/1503214.png" />
    </article> :
    <article>
      <h2 className="card-header">{species.name}</h2>
      <p className="card-text">classNameification <b>{species.classNameification}</b><br /> 
        Language: <b>{species.language}</b><br />
        Height (cm): <b>{species.average_height}</b><br />
         Avg lifespan: <b>{species.average_lifespan}</b><br />
        Eye colors: <b>{species.eye_colors}</b><br />
         Skin colors: <b>{species.hair_colors}</b><br />
      </p>
      <h3 className="card-header">Movies: </h3>
      {
        species.films.length > 0 ? species.films.map((data, index) => (
         <div key={index}>
          <PeopleCardModal movies={data}/>
          </div>
        )):
        ( <div>Nothing found</div> )
      }
      <div key="homeplanet">
      <PeopleCardPlanet planets={species.homeworld}/>
      </div>
    </article>}
</div>
)

}

export default SpeciesCard;