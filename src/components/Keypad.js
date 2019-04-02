// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

  handleClick = () => {
    console.log('Entering password...')
  }
  render () {
    return (
      <div>
        <input onKeyUp={this.handleClick} type='password' />
      </div>
    )
  }
}