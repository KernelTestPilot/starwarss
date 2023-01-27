import React from "react";



const PlanetCard =({planet, ishown}) => {
return(
    <div>{planet.name}
      <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
    </div>
    
)

}

export default PlanetCard;