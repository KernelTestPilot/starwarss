import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleInfo from "./PeopleInfo";



const VehicleCard =({vehicle,ishown}) => {
return(
  <div>
  {ishown ? 
    <article>
      <h2 class="card-header">{vehicle.name}</h2>
      <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
    </article> :
    <article>
      <h2 class="card-header">{vehicle.name}</h2>
      <p class="card-text">
        Model: <b>{vehicle.model}</b><br />
        Manufacturer: <b>{vehicle.manufacturer}</b><br />
        Type: <b>{vehicle.vehicle_class}</b><br />
        Length: <b>{vehicle.length}m</b><br />
        Atmospheric top speed: <b>{vehicle.max_atmosphering_speed}m/s</b><br />
        Cargo capacity: <b>{vehicle.cargo_capacity}kg</b><br />
        Number of crew needed to pilot: <b>{vehicle.crew}</b><br />
        Max number of passengers: <b>{vehicle.passengers}</b><br />
        Time between resupplies (at full crew): <b>{vehicle.consumables}</b><br />
        Cost: <b>{vehicle.cost_in_credits} credits</b><br />
      </p>
      <h3 class="card-header">Pilots: </h3>
        {vehicle.pilots.length > 0 ? vehicle.pilots.map((data, index) => (  
            <PeopleInfo peoples={data}/>
          )):
          (<div>Nothing found</div>)}<br />
        
        <h3 class="card-header">Movies: </h3>
        {vehicle.films.length > 0 ? vehicle.films.map((data, index) => ( 
          <PeopleCardModal movies={data}/>
        )):
          (<div>Nothing found</div>)}
    </article>}
  </div>
)

}

export default VehicleCard;