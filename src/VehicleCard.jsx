import React from "react";
import PeopleCardModal from "./PeopleCardModal";
import PeopleInfo from "./PeopleInfo";



const VehicleCard =({vehicle,ishown}) => {
return(
  <div className="content-card">
  {ishown ? 
    <article>
      <h2 className="card-header">{vehicle.name}</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/1679/1679589.png" />
    </article> :
    <article>
      <h2 className="card-header">{vehicle.name}</h2>
      <p className="card-text">
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
      <h3 className="card-header">Pilots: </h3>
        {vehicle.pilots.length > 0 ? vehicle.pilots.map((data, index) => ( 
            <div key={index}>
            <PeopleInfo peoples={data}/>
            </div>
          )):
          (<div>Nothing found</div>)}<br />
        
        <h3 className="card-header">Movies: </h3>
        {vehicle.films.length > 0 ? vehicle.films.map((data, index) => (
          <div key={index}>
          <PeopleCardModal movies={data}/>
          </div> 
        )):
          (<div>Nothing found</div>)}
    </article>}
  </div>
)

}

export default VehicleCard;