import React from "react";



const FilmCard =({film, ishown}) => {
return(
    <div>{film.title} 
          <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
     </div>
    
    
)

}

export default FilmCard;