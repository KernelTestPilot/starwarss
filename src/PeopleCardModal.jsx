import React from "react";
import { useEffect, useState } from 'react';

const PeopleCardModal =({movies}) => {
  const [movie, setMovieData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  

  useEffect(() => {
   Promise.all([
      fetch(movies),
   ])
    .then(([resMovies]) =>
    Promise.all([resMovies.json()])
    )
    .then(([movieData]) => {
      setMovieData(movieData);
      console.log(movieData)
    });
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
       <h1 class="small-card-header">{movie.title}</h1> 
      </div>
      {showMessage &&   <div class="small-card">Director: {movie.director} Producer: {movie.producer}    
      <h3 class="small-card-header">Title: {movie.title}</h3>
        <p class="small-card-text">{movie.director}, {movie.release_date}</p>
      </div>
      }
  </div>

)

}

export default PeopleCardModal;