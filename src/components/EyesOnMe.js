import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  printGood = () => {
    console.log('Good!');
  }

  printEyes = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.printGood} onBlur={this.printEyes}></button>
    )
  }
}
