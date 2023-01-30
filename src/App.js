
import './App.css';
import { useEffect, useState } from 'react';
import PeopleCard from './PeopleCard.jsx';
import PlanetCard from './PlanetCard';
import FilmCard from './FilmCard';
import SpeciesCard from './SpeciesCard';
import VehicleCard from './VehicleCard';
import StarChipCard from './StarChipCard';

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
      <header class="main-header">
      </header>
      <nav class="nav-container">
        <button class="main-nav-btn" value="people"     onClick={(e) => SetValue(e.target.value)}>People    </button>
        <button class="main-nav-btn" value="planets"    onClick={(e) => SetValue(e.target.value)}>Planets   </button>
        <button class="main-nav-btn" value="films"      onClick={(e) => SetValue(e.target.value)}>Films     </button>
        <button class="main-nav-btn" value="species"    onClick={(e) => SetValue(e.target.value)}>Species   </button>
        <button class="main-nav-btn" value="vehicles"   onClick={(e) => SetValue(e.target.value)}>Vehicles  </button>
        <button class="main-nav-btn" value="starships"  onClick={(e) => SetValue(e.target.value)}>Starships </button>
      </nav>
      <nav class="secondary-nav-container">
      <button class="main-nav-btn" value="?page=1" onClick={(e) => setPage(e.target.value)}>1</button>
        <button class="main-nav-btn" value="?page=2" onClick={(e) => setPage(e.target.value)}>2</button>
        <button class="main-nav-btn" value="?page=3" onClick={(e) => setPage(e.target.value)}>3</button>
        <button class="main-nav-btn" value="?page=4" onClick={(e) => setPage(e.target.value)}>4</button>
        <button class="main-nav-btn" value="?page=5" onClick={(e) => setPage(e.target.value)}>5</button>
        <button class="main-nav-btn" value="?page=6" onClick={(e) => setPage(e.target.value)}>6</button>
        <button class="main-nav-btn" value="?page=7" onClick={(e) => setPage(e.target.value)}>7</button>
        <button class="main-nav-btn" value="?page=8" onClick={(e) => setPage(e.target.value)}>8</button>
        <button class="main-nav-btn" value="?page=9" onClick={(e) => setPage(e.target.value)}>9</button>
      </nav>

      <main class="main-container">
        {
          searchTerm?.length > 0 ? searchTerm.map((data, index) => (
            <div class="content-card" onClick={(e) => handleClick(data, index, isShown[`${index}`])}>
              {RenderCard(data, index) }    
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