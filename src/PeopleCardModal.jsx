import React from "react";
import { useEffect, useState } from 'react';

const PeopleCardModal =({movies}) => {
  const [movie, setMovieData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  
  const abortCon = new AbortController();

  const fetchStarwars = async (movies) => {
    setMovieData([]);
    const response = await fetch (`${movies}`)
    const data = await response.json()
    //send data to useState
    setMovieData(data);
    console.log(data)
  }

  useEffect(() => {
   fetchStarwars(movies)
  
  },[]);
  
return(
  <div>
      <div
        className="hoverableDiv"
        onMouseEnter={() => {
          setShowMessage(true);
        }}
        onMouseLeave={() => {
          setShowMessage(false);
        }}
      >
          {
      // HOVER ME ->
}
       <h1 className="small-card-header">{movie.title}</h1> 
      </div>
      {showMessage &&   <div className="small-card">
        <p className="small-card-text bold-text">{movie.director}, {movie.release_date}</p><hr />
        <p className="small-card-text">{movie.opening_crawl}</p>
      </div>
      }
  </div>

)

}

export default PeopleCardModal;