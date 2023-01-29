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


} from 'react-bulma-components'


const PeopleCard =({people, ishown}) => {
console.log(ishown)
return(
    
    <div>{people.name} 
     <article>
            <figure class="image is-5by4">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle"> </h2>
            <span class="tag is-rounded">Starwars people</span>
          </article>


    <div> {ishown? <div>  </div>  :  <Card style={{ width: 500, margin: 'auto' }}>
        <Card.Content>
            <Media>
                <Media.Item renderAs="figure" align="left">
                </Media.Item>
                <Media.Item>
                <Heading size={3}>{people.name}</Heading>
                </Media.Item>
            </Media>
            <Content>
                Gender: <b>{people.gender}</b><br />
                Birth year: <b>{people.birth_year}</b><br />
                Height (cm): <b>{people.height}</b><br />
                Weight (kg): <b>{people.mass}</b><br />
                Eye colors: <b>{people.eye_color}</b><br />
                Hair colors: <b>{people.hair_color}</b><br />
                Skin colors: <b>{people.skin_color}</b><br />
                Homeworld: <a href={people.homeworld}><b>{people.homeworld}</b></a><br />
            </Content>
        </Card.Content>
    </Card>} </div>
    
    
    </div>
    
)

}

export default PeopleCard;