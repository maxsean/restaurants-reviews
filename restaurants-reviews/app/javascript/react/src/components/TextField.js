import React from 'react';

const TextField = (props) => {
  return(
    <label>Search
      <input
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
      />
    </label>
  )
}
export default TextField;
