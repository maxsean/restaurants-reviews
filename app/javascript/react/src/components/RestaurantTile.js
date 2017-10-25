import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import PieChart from '../containers/PieChart';

const RestaurantTile = (props) => {

  return(
    <div className="restaurant-tile">
      <div className="image-container">
        <img className="restaurant-image" src={props.picture} alt="A picture of the Restaurant"></img>
      </div>
      <div>
        <p><strong>{props.name}</strong></p>
        <p><strong>Address: </strong>{props.address}</p>
        <p><strong>City: </strong>{props.city}</p>
        <p><strong>State: </strong>{props.state}</p>
        <p><strong>Zip: </strong>{props.zip}</p>
        <p><strong>Pricing: </strong>{props.dollar_value}</p>
        <p><strong>Description: </strong>{props.description}</p>
        <p><strong>Phone Number: </strong>{props.phone_number}</p>
        <p><strong>Website: </strong>{props.website_url}</p>
      </div>
    </div>
  )
}

export default RestaurantTile;
