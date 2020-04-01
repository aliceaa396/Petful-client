import React, { Component } from 'react';
import NextDog from './NextDog';
import PetfulApiService from '../../services/PetfulApiService';
import PetfulContext from '../../Context/PetfulContext';

export class DogList extends Component {
  static contextType = PetfulContext;

  showDogs = res => {
    PetfulApiService.displayDogs(res)
      .then(dispRes => {
        this.context.setAllDogs(dispRes);
      })
      .then(dog => {
        PetfulApiService.deleteDog().then(()=> {
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
    PetfulApiService.getDogs().then(res => this.showDogs(res));
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
