// Code EyesOnMe Component Here
import React, { Component } from "react"


class EyesOnMe extends Component {

  eventOne = () => {
    console.log('Good!')
  }

  eventTwo = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {

    return(
      <button onFocus={this.eventOne} onBlur={this.eventTwo}>click me!</button>
    )
  }
}


export default EyesOnMe
