import React from "react";
import { useEffect, useState } from 'react';

const PeopleCardModal =({movies}) => {
  const [movie, setMovieData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

        fetch(movies, {
            signal: signal
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setMovieData(response);
        });
    return () => {
        // cancel the request before component unmounts
        controller.abort();
    };
  
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