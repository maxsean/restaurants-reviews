import React from 'react'

const RadioBooleanField = props => {
  return(
    <div className="radioBooleanField">
      <label> {props.label}
        <br />
        <input
          type="radio"
          value={true}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}Yes{" "}
        <input
          type="radio"
          value={false}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}No{" "}
        <input
          type="radio"
          value={false}
          name={props.name}
          checked={props.checked}
          hidden={true}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default RadioBooleanField;
