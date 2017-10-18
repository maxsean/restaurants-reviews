import React from 'react';

const RestaurantTile = (props) => {

  return(
    <div className="restaurant-tile">
      <div className="image-container">
        <img className="restaurant-image" src={props.picture} alt="A picture of the Restaurant"></img>
      </div>
      <p>
        <strong>Address: </strong>{props.address}<br />
        <strong>City: </strong>{props.city}<br />
        <strong>State: </strong>{props.state}<br />
      </p>
    </div>

  )
}

export default RestaurantTile;
