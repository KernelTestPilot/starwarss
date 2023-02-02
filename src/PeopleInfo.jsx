import React from "react";
import { useEffect, useState } from 'react';

const PeopleInfo =({peoples}) => {
  const [people, setPeopleData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

        fetch(peoples, {
            signal: signal
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setPeopleData(response);
        });
    return () => {
        // cancel the request before component unmounts
        controller.abort();
    };
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
       <h1 className="small-card-header">{people.name}</h1> 
      </div>
      {showMessage &&   <div className="small-card">
      <h2 className="card-header">{people.name}</h2>
        <p className="card-text">Gender: <b>{people.gender}</b><br /> 
          Birth year: <b>{people.birth_year}</b><br />
          Height (cm): <b>{people.height}</b>, Weight (kg): <b>{people.mass}</b><br />
          Eye colors: <b>{people.eye_color}</b>, Hair colors: <b>{people.hair_color}</b><br />
          Skin colors: <b>{people.skin_color}</b>
        </p>
      </div>
      }
  </div>

)

}

export default PeopleInfo;