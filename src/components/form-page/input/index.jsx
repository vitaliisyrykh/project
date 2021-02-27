import React from 'react';

const Input = props => {
  console.log(props);
  return(
    <input name={props.name} />
  )
}

export default Input;