// Code Keypad Component Here
import React, { Component } from "react"


class Keypad extends React.Component {

  event = () => {
  console.log('Entering password...');
  }

  render() {
    return(
      <input onKeyUp={this.event} type="password" />
    )
  }
}


export default Keypad
