import React from 'react';

const TextField = (props) => {
  return(
    <label>
      <input
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
      />
    </label>

  )
}
export default TextField;
