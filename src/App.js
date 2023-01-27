
import './App.css';
import { useEffect, useState } from 'react';
import PeopleCard from './PeopleCard.jsx';
import PlanetCard from './PlanetCard';
import FilmCard from './FilmCard';
import SpeciesCard from './SpeciesCard';
import VehicleCard from './VehicleCard';
import StarChipCard from './StarChipCard';
import 'bulma/css/bulma.min.css';
import{
  Button,
  Container,
  Columns,
  Section,
  Navbar,
  Breadcrumb,
  Menu,
  Level
} from 'react-bulma-components'
const API_URL = 'https://swapi.dev/api/';

function App() {
  //create a state for the app function
const [searchTerm, setSearchTerm] = useState([]);
const [value, SetValue] = useState([]);
const [isShown, setIsShown] = useState({});
//fetch function with api
const fetchStarwars = async (type) => {
const response = await fetch (`${API_URL}${type}`)
const data = await response.json()
//send data to useState
setTrue (data.results)
setSearchTerm(data.results)
console.log(data.results)

}
const setTrue = (data) => {
  const indx = data.map((item, index) => {return (true)})
  setIsShown(indx)
  console.log(isShown)
}

//runs first
useEffect(() => {
console.log(searchTerm)
fetchStarwars(value)
},[value]);

const handleClick = (event, index, setFalse) => {
  console.log(index)
  //js object sätter indexar till true
  setIsShown({
    ...isShown,
    [index] : !setFalse,
  });
  
  console.log(!setFalse)
  console.log(isShown)
};

//So our render  doesnt have alot of if statements and right card render
const RenderCard = (searchTerm, index) => {
if(value =="people"){
  return <>{<PeopleCard people={searchTerm} ishown={isShown[index]}/>}</>
      }
if(value =="planets"){
   return <>{<PlanetCard planet ={searchTerm} ishown={isShown[index]}/>}</> 
 }
 if(value =="films"){
  return <>{<FilmCard film={searchTerm} ishown={isShown[index]}/>}</>
} 
if(value =="species"){
  return <SpeciesCard species ={searchTerm} ishown={isShown[index]}/>
} 
if(value == "vehicles"){
  return <VehicleCard vehicle ={searchTerm} ishown={isShown[index]}/>
} 
if(value == "starships"){
  return <StarChipCard starchip={searchTerm} ishown={isShown[index]}/>
} 
}

//render this bitch
  return (
    <div className="App">
  <Section class="hero is-danger"> 
  <div class="hero-body">
    <p class="title">
      Starwars
    </p>
    <p class="subtitle">
     Wiki
    </p>
  </div>
  </Section>

     <Container class="container is-fluid">
      <Button class="button is-info  is-outlined is-rounded" value = "people"  onClick={(e) => SetValue(e.target.value) }>People </Button>
      <Button class="button is-info  is-outlined is-rounded"  value = "planets" onClick={(e) => SetValue(e.target.value)}>Planets </Button>
      <Button class="button is-info  is-outlined is-rounded" value = "films" onClick={(e) => SetValue(e.target.value)}>Films </Button>
      <Button class="button is-info  is-outlined is-rounded" value = "species" onClick={(e) => SetValue(e.target.value)}>Species </Button>
      <Button class="button is-info  is-outlined is-rounded" value = "vehicles" onClick={(e) => SetValue(e.target.value)}>Vehicles </Button>
      <Button class="button is-info  is-outlined is-rounded" value = "starships" onClick={(e) => SetValue(e.target.value)}>Starships </Button>
     </Container>

     <Level.Side align="left">
     <Menu>
      <Menu.List>
      
        
     {
     searchTerm?.length > 0 
     ?
     searchTerm.map((data, index) => (
      <Menu.List.Item onClick={(e) => handleClick(data, index, isShown[`${index}`])}>
       {RenderCard(data, index) }    
      </Menu.List.Item>
    )):
    (
        <div> nothing found</div>
    )}
    
    </Menu.List>
    </Menu>
    </Level.Side>
    
    </div>
  );
}

export default App;