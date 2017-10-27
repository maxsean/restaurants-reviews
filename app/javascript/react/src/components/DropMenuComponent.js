import React from 'react'

const DropMenuContainer = props => {
  return(
    <label>{props.label}
      <select name="reason_of_visit" onChange={props.handleChange}>
        <option name="reason_of_visit" value="Date">Date</option>
        <option name="reason_of_visit" value="Sports Event">Sports Event</option>
        <option name="reason_of_visit" value="Lunch">Lunch</option>
        <option name="reason_of_visit" value="Dinner">Dinner</option>
        <option name="reason_of_visit" value="Breakfast">Breakfast</option>
        <option name="reason_of_visit" value="Brunch">Brunch</option>
        <option name="reason_of_visit" value="Family Outing">Family Outing</option>
        <option name="reason_of_visit" value="Celebration">Celebration</option>
        <option name="reason_of_visit" value="Takeout">Takeout</option>
        <option name="reason_of_visit" value="Other">Other</option>
      </select>
    </label>
  )
}
export default DropMenuContainer
