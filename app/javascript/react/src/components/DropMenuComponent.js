import React from 'react'

const DropMenuContainer = props => {
  return(
    <label>{props.label}
      <select onChange={props.handleChange}>
        <option value="Date">Date</option>
        <option value="Sports Event">Sports Event</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Brunch">Brunh</option>
        <option value="Family Outing">Family Outing</option>
        <option value="Celebration">Celebration</option>
        <option value="Takeout">Takeout</option>
        <option value="Other">Other</option>
      </select>
    </label>
  )
}
export default DropMenuContainer
