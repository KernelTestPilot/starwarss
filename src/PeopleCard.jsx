import React from "react";
import 'bulma/css/bulma.min.css';
import{
  Button,
  Container,
  Columns,
  Section,
  div,
  Card,
  Media,
  Heading,
  Content,
  Modal,


} from 'react-bulma-components';
import PeopleCardModal from "./PeopleCardModal";
import PeopleCardPlanet from "./PeopleCardPlanet";

const PeopleCard =({people, ishown}) => {

return(

  <div>
    {ishown ? 
      <article>
        <h2 class="card-header">{people.name}</h2>
        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
      </article> :
      <article>
        <h2 class="card-header">{people.name}</h2>
        <p class="card-text">Gender: <b>{people.gender}</b><br /> 
          Birth year: <b>{people.birth_year}</b><br />
          Height (cm): <b>{people.height}</b>, Weight (kg): <b>{people.mass}</b><br />
          Eye colors: <b>{people.eye_color}</b>, Hair colors: <b>{people.hair_color}</b><br />
          Skin colors: <b>{people.skin_color}</b><hr />
        </p>
        <h3 class="card-header">Movies: </h3>
        {
          people.films.length > 0 ? people.films.map((data, index) => (  
            <PeopleCardModal movies={data}/>
          )):
          ( <div>Nothing found</div> )
        }
         {
         
       
        }
        <PeopleCardPlanet planets={people.homeworld}/>
      </article>}
  </div>
    
)

}

export default PeopleCard;