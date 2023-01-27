import React from "react";



const VehicleCard =({vehicle,ishown}) => {
return(
    <div>{vehicle.model}
      <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
    </div>
    
)

}

export default VehicleCard;