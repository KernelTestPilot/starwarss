import React from "react";
import 'bulma/css/bulma.min.css';
import { useEffect, useState } from 'react';


const PeopleCardModal =({movies}) => {
  const [SearchData, setSearchData] = useState([]);

  const fetchMovies = async (movies) => {
    const response = await fetch (movies)
    const data = await response.json()
    //send data to useState
    setSearchData(data)
    console.log(data)
    }
    //runs first
useEffect(() => {
  fetchMovies(movies)
  },[movies]);
return(
  <div>

      <div class="card small has-background-grey">
      <div class="card-content">
      <span class="title is-6">
      <p class="subtitle is-6"><b class="has-text-black">{SearchData.title}</b></p>
     </span> 
     
      <span class="title is-6"> 
      <p class="subtitle is-6">Director:  <b class=" has-text-light">{SearchData.director}</b></p>
   </span>
   <span class="title is-6"> 
      <p class="subtitle is-6">Year:  <b class="has-text-dark">{SearchData.release_date}</b></p>
   </span>
   </div>

      </div>

    </div>

    
)

}

export default PeopleCardModal;