
import React from 'react'
const EyesOnMe = () => {

  const focusHandler = () => {
    console.log('Good!');
  }

  const blurHandler = () => {
    console.log('Hey! Eyes on me!');
  }


  return(
    <button value="Button" onFocus={() => focusHandler()} onBlur={() => blurHandler()} > Attention</button>
  )
}

export default EyesOnMe;
