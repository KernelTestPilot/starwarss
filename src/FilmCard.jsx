import React from "react";



const FilmCard =({film, ishown}) => {
return(
     <div className="content-card">
     {ishown ? 
       <article>
         <h2 className="card-header">{film.title}</h2>
         <p>Episode {film.episode_id}</p>
         <img src="https://cdn-icons-png.flaticon.com/512/9428/9428726.png" />
       </article> :
       <article>
         <h2 className="card-header">{film.title}</h2>
         <p className="card-text">
         {film.opening_crawl}<br /><br />
          Directed by {film.director}.<br />
          Produced by {film.producer}.<br />
          Release date: {film.release_date}<br />
         </p>
       </article>}
     </div>
)

}

export default FilmCard;