import React from "react";



const StarChipCard =({starchip, ishown}) => {
return(
    <div>{starchip.name}
      <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
    </div>
    
)

}

export default StarChipCard;