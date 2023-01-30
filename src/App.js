
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
  Section,
} from 'react-bulma-components'

const API_URL = 'https://swapi.dev/api/';

function App() {
  //create a state for the app function
const [searchTerm, setSearchTerm] = useState([]);
const [value, SetValue] = useState([]);
const [isShown, setIsShown] = useState({});
const[page, setPage] = useState([]);

//fetch function with api
const fetchStarwars = async (type, page) => {
if(!page){ setPage ="?page=1";}
const response = await fetch (`${API_URL}${type}${page}`)
const data = await response.json()
//send data to useState
setTrue (data.results)
setSearchTerm(data.results)

}
const setTrue = (data) => {
  const indx = data.map((item, index) => {return (true)})
  setIsShown(indx)
}

//runs first
useEffect(() => {
  fetchStarwars(value, page)

},[value, page]);

const handleClick = (event, index, setFalse) => {
  //js object sätter indexar till true
  setIsShown({
    ...isShown,
    [index] : !setFalse,
  });
};

const RenderCard = (searchTerm, index) => {
if(value =="people"){
  return <>{<PeopleCard people={searchTerm} ishown={isShown[index]}/> }</>
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
     <nav class="pagination" role="navigation" aria-label="pagination">
  <ul class="pagination-list">
    <li>
    <Button class="button is-info  is-outlined is-rounded" value="?page=1" onClick={(e) => setPage(e.target.value)}>1</Button>
    </li>
    <li>
    <Button class="button is-info  is-outlined is-rounded" value="?page=2" onClick={(e) => setPage(e.target.value)}>2</Button>
    </li>
    <li>
    <Button class="button is-info  is-outlined is-rounded" value="?page=3" onClick={(e) => setPage(e.target.value)}>3</Button>
    </li>
    <li>
    <Button class="button is-info  is-outlined is-rounded" value="?page=4" onClick={(e) => setPage(e.target.value)}>4</Button>
    </li>
  </ul>
</nav>
      <Section class="section is-large"> 
      <Container class="container">
      <div class="row columns  is-multiline">
     {
     searchTerm?.length > 0 
     ?
     searchTerm.map((data, index) => (
      <div class="column is-3" onClick={(e) => handleClick(data, index, isShown[`${index}`])}>
      {RenderCard(data, index) }    
     </div>
    )):
    (
        <div> nothing found</div>
    )}
    </div>
    </Container>
    </Section> 
    </div>
  );
}

export default App;