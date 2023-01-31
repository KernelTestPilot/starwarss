
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
  div,
  Card,
  Media,
  Heading,
  Content,
  Modal,


} from 'react-bulma-components';

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
  console.log("data loaded")
  const response = await fetch (`${API_URL}${type}${page}`)
  const data = await response.json()
  //send data to useState
  setTrue (data.results)
  setSearchTerm(data.results)
 
  console.log(data.results)
}

const setTrue = (data) => {
    console.log("test")
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
  return <PeopleCard people={searchTerm} ishown={isShown[index]}/>
}
if(value =="planets"){
  return <PlanetCard planet={searchTerm} ishown={isShown[index]}/>
}
if(value =="films"){
  return <FilmCard film={searchTerm} ishown={isShown[index]}/>
} 
if(value =="species"){
  return <SpeciesCard species={searchTerm} ishown={isShown[index]}/>
} 
if(value == "vehicles"){
  return <VehicleCard vehicle={searchTerm} ishown={isShown[index]}/>
} 
if(value == "starships"){
  return <StarChipCard starchip={searchTerm} ishown={isShown[index]}/>
} 
}
//render this bitch
  return (
    <div className="App">
      <header className="main-header">
      </header>
      <nav className="nav-container">
        <button className="main-nav-btn" value="people"     onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>People    </button>
        <button className="main-nav-btn" value="planets"    onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>Planets   </button>
        <button className="main-nav-btn" value="films"      onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>Films     </button>
        <button className="main-nav-btn" value="species"    onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>Species   </button>
        <button className="main-nav-btn" value="vehicles"   onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>Vehicles  </button>
        <button className="main-nav-btn" value="starships"  onClick={(e) => {
          setSearchTerm([])
          return SetValue(e.target.value)}}>Starships </button>
      </nav>
      <nav className="secondary-nav-container">
      <button className="main-nav-btn" value="?page=1" onClick={(e) => setPage(e.target.value)}>1</button>
        <button className="main-nav-btn" value="?page=2" onClick={(e) => setPage(e.target.value)}>2</button>
        <button className="main-nav-btn" value="?page=3" onClick={(e) => setPage(e.target.value)}>3</button>
        <button className="main-nav-btn" value="?page=4" onClick={(e) => setPage(e.target.value)}>4</button>
        <button className="main-nav-btn" value="?page=5" onClick={(e) => setPage(e.target.value)}>5</button>
        <button className="main-nav-btn" value="?page=6" onClick={(e) => setPage(e.target.value)}>6</button>
        <button className="main-nav-btn" value="?page=7" onClick={(e) => setPage(e.target.value)}>7</button>
        <button className="main-nav-btn" value="?page=8" onClick={(e) => setPage(e.target.value)}>8</button>
        <button className="main-nav-btn" value="?page=9" onClick={(e) => setPage(e.target.value)}>9</button>
      </nav>

      <main className="main-container">
        {
          searchTerm?.length > 0 ? searchTerm.map((data, index) => (
            <div className="content-card" key={index} onClick={(e) => handleClick(data, index, isShown[`${index}`])}>
              {RenderCard(data, index)}    
            </div>
          )):
          (
            <div> nothing found</div>
          )
        }
      </main>
    </div>
  );
}

export default App;