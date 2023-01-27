import React from "react";



const SpeciesCard =({species, ishown}) => {
return(
    <div>{species.name}
      <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
    </div>
    
)

}

export default SpeciesCard;