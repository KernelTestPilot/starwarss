import React from "react";



const PeopleCard =({people, ishown}) => {
console.log(ishown)
return(
    
    <div>{people.name} 
    
    <div> {ishown? <div>  </div>  : <div> Build card here</div>} </div>
    
    
    
    </div>
    
)

}

export default PeopleCard;