
import './App.css';
import { useEffect, useState } from 'react';
import PeopleCard from './PeopleCard.jsx';
const API_URL = 'https://swapi.dev/api/';

function App() {

  //create a state for the app function
const [searchTerm, setSearchTerm] = useState([]);

//fetch function with api
const fetchStarwars = async (type) => {
const response = await fetch (`${API_URL}${type}`)
const data = await response.json();
//send data to useState
setSearchTerm(data.results)
}

//runs last
useEffect(() => {
fetchStarwars()
},[]);


console.log(searchTerm)
//render this bitch
  return (
    <div className="App">
     <div>
      <div>
      </div>
      <button value = "people"  onClick={(e) => fetchStarwars(e.target.value)}> </button>
      <button value = "planets" onClick={(e) => fetchStarwars(e.target.value)}> </button>
      <button value = "films" onClick={(e) => fetchStarwars(e.target.value)}> </button>
      <button value = "species" onClick={(e) => fetchStarwars(e.target.value)}> </button>
      <button value = "vehicles" onClick={(e) => fetchStarwars(e.target.value)}> </button>
      <button value = "starships" onClick={(e) => fetchStarwars(e.target.value)}> </button>
     </div>
     {
     searchTerm?.length > 0 
     ?
     searchTerm.map((movie) => (
       <PeopleCard movie ={movie}/>
    )):
    (
        <div> nothing found</div>
    )}
    
    </div>
  );
}

export default App;