import React, { Component } from 'react';
import NextDog from './NextDog';
import apiService from '../../services/apiService';
import PetfulContext from '../../Context/PetfulContext';

export class DogList extends Component {
  static contextType = PetfulContext;

  showDogs = res => {
    apiService.displayDogs(res)
      .then(dispRes => {
        this.context.setAllDogs(dispRes);
      })
      .then(dog => {
        apiService.deleteDog().then(()=> {
          if(dog) {
            setTimeout(() => {
              this.updateDog();
            }, 2000);
          }
        });
      })
      .catch(this.context.setError)
  };

  componentDidMount() {
    apiService.getDogs().then(res => this.showDogs(res));
  }


  renderNextDog() {
    const { nextDog } = this.context;
    return !nextDog.next ? (
      "Sorry there are no dogs available"
    ) 
    : 
    (
      <> 
        <NextDog nextDogImg = {nextDog.value.imageURL} />
      </>
    );
  }

  renderNextNextDog() {
    const { nextDog } = this.context;
    return !nextDog.next ? (
      "Sorry there are no dogs available"
    ) 
    : 
    (
      <> 
        <NextDog nextDogImg = {nextDog.value.imageURL} />
      </>
    );
  }

  render() {
    return (
      <div>
        {this.renderNextDog()}
        {this.renderNextNextDog()}
      </div>
    )
  }
}

export default DogList
