import React, { Component } from 'react'

class NextDog extends Component {
  render() {
    const { nextDogImg } = this.props;
    return <img src={nextDogImg} />

  }
}

export default NextDog;


