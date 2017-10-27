import React from 'react';

const RestaurantTile = (props) => {
  let dollar_value;
  let num = [1,2,3];
  dollar_value = num.map(n => {
    if (n <= props.dollar_value) {
      return (
        <i key={n} className="fa fa-usd" aria-hidden="true"></i>
      )
    }
  })

  return(
    <div className="restaurant-tile">
      <div className=" column restaurantLeft">
        <div className="image-container">
          <a href={`/restaurants/${props.id}`}><img className="restaurant-image" src={props.picture} alt="A picture of the Restaurant"></img></a>
        </div>
      </div>
      <div className="column restaurantRight">
        <div className="column restaurantLeft restaurantDataLeft">
          <a href={`/restaurants/${props.id}`}><div className= "nameStrong">{props.name}</div></a>
            <div className="dollarValue">PRICE: {dollar_value}</div>
            <div className="contactLabel">
            <p><strong>Address: </strong>{props.address}</p>
            <p><strong>City: </strong>{props.city}</p>
            <p><strong>State: </strong>{props.state}</p>
            <p><strong>Zip: </strong>{props.zip}</p>
          </div>
        </div>
        <div className="column restaurantRight restaurantDataRight">
          <p><strong>Description: </strong>{props.description}</p>
          <p><strong>Phone Number: </strong>{props.phone_number}</p>
          <p><strong>Website: </strong>{props.website_url}</p>
          <div className="chart">
            <button><a href={`/charts/${props.id}`}>Review Demographics</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantTile;
