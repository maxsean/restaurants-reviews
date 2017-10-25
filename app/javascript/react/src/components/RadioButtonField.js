import React from 'react'

const RadioButtonField = props => {
  return(
    <div className="radioButtonField">
      <label> {props.label}
        <br />
        <input
          type="radio"
          className={props.name}
          value={1}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}1{" "}
        <input
          type="radio"
          value={2}
          className={props.name}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}2{" "}
        <input
          type="radio"
          value={3}
          className={props.name}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}3{" "}
        <input
          type="radio"
          value={4}
          className={props.name}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}4{" "}
        <input
          type="radio"
          value={5}
          className={props.name}
          name={props.name}
          onChange={props.handleChange}
        />
        {" "}5{" "}
        <input
          type="radio"
          value={6}
          className={props.name}
          checked={props.checked}
          hidden={true}
          name={props.name}
        />

      </label>
    </div>
  )
}

export default RadioButtonField
