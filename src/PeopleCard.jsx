import React from "react";
import 'bulma/css/bulma.min.css';
import{
  Card,
  Media,
  Heading,
  Content,
} from 'react-bulma-components';
import PeopleCardModal from "./PeopleCardModal";

const PeopleCard =({people, ishown}) => {

return(
    
    <div>
    
    <div> {ishown? <div>{people.name} <article>
            <figure class="image is-5by4">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle"> </h2>
            <span class="tag is-rounded">Starwars people</span>
          </article>  </div>  :  <Card style={{ width: 500, margin: 'auto' }}>
        <Card.Content>
            <Media>
                <Media.Item renderAs="figure" align="left">
                </Media.Item>
                <Media.Item>
                <Heading size={3}>{people.name}</Heading>
                </Media.Item>
            </Media>
            <Content class="has-text-left">
                Gender: <b>{people.gender}</b><br /> 
                Birth year: <b>{people.birth_year}</b><br />
                Height (cm): <b>{people.height}</b>     Weight (kg): <b>{people.mass}</b><br />
                Eye colors: <b>{people.eye_color}</b>   Hair colors: <b>{people.hair_color}</b><br />
                Skin colors: <b>{people.skin_color}</b><br />
                 <span class="title is-12"> Movies: </span>
                </Content>
                <Content>
              
                {
                  people.films?.length > 0 
                  ?
                  people.films.map((data, index) => (
                      
                  <><PeopleCardModal movies={data}/></>
               
                  )):
                  (
                      <div> nothing found</div>
                  )}
                  
            </Content>
        </Card.Content>
    </Card>} </div>
    </div>
    
)
}
export default PeopleCard;