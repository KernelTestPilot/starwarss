import React from "react";
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
    <div class="small-card">
        <h3 class="small-card-header">{SearchData.title}</h3>
        <p class="small-card-text">{SearchData.director}, {SearchData.release_date}</p>
    </div>
  </div>

)

}

export default PeopleCardModal;