import React from "react";



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
      <p class="card-text">
        Average height (cm): <b>{species.average_height}</b><br />
        Average lifespan (years): <b>{species.average_lifespan}</b><br />
        Classification: <b>{species.classification}</b><br />
        Designation: <b>{species.designation}</b><br />
        Eye colors: <b>{species.eye_colors}</b><br />
        Hair colors: <b>{species.hair_colors}</b><br />
        Skin colors: <b>{species.skin_colors}</b><br />
        Homeworld: <a href={species.homeworld}><b>{species.homeworld}</b></a><br />
        Language: <b>{species.language}</b><br />
      </p>
    </article>}
  </div>
)

}

export default SpeciesCard;