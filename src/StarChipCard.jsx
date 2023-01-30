import React from "react";



const StarChipCard =({starchip, ishown}) => {
return(
  <div>
  {ishown ? 
    <article>
      <h2 class="card-header">{starchip.name}</h2>
      <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
    </article> :
    <article>
      <h2 class="card-header">{starchip.name}</h2>
      <p class="card-text">
      Model: <b>{starchip.model}</b><br />
                Manufacturer: <b>{starchip.manufacturer}</b><br />
                Type: <b>{starchip.starship_class}</b><br />
                Length: <b>{starchip.length}m</b><br />
                Atmospheric top speed: <b>{starchip.max_atmosphering_speed}m/s</b><br />
                Hyperdrive rating: <b>{starchip.hyperdrive_rating}</b><br />
                Number of Megalights per hour travelled: <b>{starchip.MGLT}</b><br />
                Cargo capacity: <b>{starchip.cargo_capacity}kg</b><br />
                Number of crew needed to pilot: <b>{starchip.crew}</b><br />
                Max number of passengers: <b>{starchip.passengers}</b><br />
                Time between resupplies (at full crew): <b>{starchip.consumables}</b><br />
                Cost: <b>{starchip.cost_in_credits} credits</b><br />
      </p>
    </article>}
  </div>
)

}

export default StarChipCard;