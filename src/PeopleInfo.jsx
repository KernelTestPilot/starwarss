import React from "react";
import { useEffect, useState } from 'react';

const PeopleInfo =({peoples}) => {
  const [people, setPeopleData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  

  useEffect(() => {
   Promise.all([
      fetch(peoples),
   ])
    .then(([respeoples]) =>
    Promise.all([respeoples.json()])
    )
    .then(([peopleData]) => {
      setPeopleData(peopleData);
      console.log("hej")
    });
  },[]);
  
return(
  <div>
      <div
        className="hoverableDiv"
        onMouseEnter={() => {
          setShowMessage(true);
        }}
        onMouseLeave={() => {
          setShowMessage(false);
        }}
      >
          {
      // HOVER ME ->
}
       <h1 class="small-card-header">{people.name}</h1> 
      </div>
      {showMessage &&   <div class="small-card">
      <h2 class="card-header">{people.name}</h2>
        <p class="card-text">Gender: <b>{people.gender}</b><br /> 
          Birth year: <b>{people.birth_year}</b><br />
          Height (cm): <b>{people.height}</b>, Weight (kg): <b>{people.mass}</b><br />
          Eye colors: <b>{people.eye_color}</b>, Hair colors: <b>{people.hair_color}</b><br />
          Skin colors: <b>{people.skin_color}</b><hr />
        </p>
      </div>
      }
  </div>

)

}

export default PeopleInfo;