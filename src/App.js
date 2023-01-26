
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
//fetch function with api
const fetchStarwars = async (type) => {
const response = await fetch (`${API_URL}${type}`)
const data = await response.json()
//send data to useState
setSearchTerm(data.results)
}

//runs first
useEffect(() => {
console.log(searchTerm)
fetchStarwars(value)
},[value]);

//So our render function doesnt have alot of if statements and right card render
const RenderCard = (searchTerm) => {
if(value =="people"){
  return <PeopleCard people ={searchTerm}/>
      }
if(value =="planets"){
   return <PlanetCard planet ={searchTerm}/>
 }
 if(value =="films"){
  return <FilmCard film ={searchTerm}/>
} 
if(value =="species"){
  return <SpeciesCard species ={searchTerm}/>
} 
if(value == "vehicles"){
  return <VehicleCard vehicle ={searchTerm}/>
} 
if(value == "starships"){
  return <StarChipCard starchip={searchTerm}/>
} 
}

//render this bitch
  return (
    <div className="App">
     <div>
      <button value = "people"  onClick={(e) => SetValue(e.target.value)}> </button>
      <button value = "planets" onClick={(e) => SetValue(e.target.value)}> </button>
      <button value = "films" onClick={(e) => SetValue(e.target.value)}> </button>
      <button value = "species" onClick={(e) => SetValue(e.target.value)}> </button>
      <button value = "vehicles" onClick={(e) => SetValue(e.target.value)}> </button>
      <button value = "starships" onClick={(e) => SetValue(e.target.value)}> </button>
     </div>
     {
     searchTerm?.length > 0 
     ?
     searchTerm.map((data) => (
       RenderCard(data)
    )):
    (
        <div> nothing found</div>
    )}
    
    </div>
  );
}

export default App;