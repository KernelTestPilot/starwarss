import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleCardPlanet from "./PeopleCardPlanet";
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
const PeopleCard =({people, ishown}) => {

return(

  <div className="content-card">
    {ishown ? 
      <article>
        <h2 className="card-header">{people.name}</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/4155/4155659.png"/>
      </article> :
      <article>
        <h2 className="card-header">{people.name}</h2>
        <p className="card-text">Gender: <b>{people.gender}</b><br /> 
          Birth year: <b>{people.birth_year}</b><br />
          Height (cm): <b>{people.height}</b>, Weight (kg): <b>{people.mass}</b><br />
          Eye colors: <b>{people.eye_color}</b>, Hair colors: <b>{people.hair_color}</b><br />
          Skin colors: <b>{people.skin_color}</b>
        </p>
        <h3 className="card-header">Movies: </h3>
        {
          people.films.length > 0 ? people.films.map((data, index) => (
            <div key={index}>
            <PeopleCardModal movies={data}/>
            </div>  
          )):
          ( <div>Nothing found</div> )
        }
        <div key="homeworld">
        <PeopleCardPlanet planets={people.homeworld}/>
        </div>
      </article>}
  </div>
    
)

}

export default PeopleCard;