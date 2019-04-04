import React from 'react'
const KeyPad = () => {

  const eventHandler = () => {
    console.log('Entering password...');
  }

  return(
    <input type="password" onKeyUp={() => eventHandler()} />
  )
}

export default KeyPad;
