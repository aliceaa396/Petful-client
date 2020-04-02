import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Form.css'
export default class Form extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  
 

  handleSubmitCat = e => {
    e.preventDefault();
    const { setCatWaitList, setCatPerson } = this.context;
    const { catName } = e.target;
    setCatWaitList(catName.value);
    setCatPerson(catName.value);
    catName.value = "";
  }


  handleSubmitDog = e => {
    e.preventDefault();
    const { setDogWaitList, setDogPerson } = this.context;
    const { dogName } = e.target;
    setDogWaitList(dogName.value);
    setDogPerson(dogName.value);
    dogName.value = "";
  }

  render() {
    
  }
}
