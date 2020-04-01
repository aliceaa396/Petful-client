import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/apiService';
import PetfulContext from '../../Context/PetfulContext';

export default class DogAdoption extends Component {
  static contextType = PetfulContext;

  updatedog = () => {
    const { dogWaitList } = this.context;

    dogWaitList.shift();

    apiService.getDogs()
      .then(response => {
        this.context.setDog(response.dog);
      })
      .then(dog => {
        apiService.deleteDog().then(() => {
          if (dogWaitList.length > 1) {
            setTimeout(() => {
              this.updateDog();
            }, 2000);
          }
        });
      })
      .catch({
        error: "there was an error"
      });
  };

  componentDidMount() {
    apiService.reloadDogs().then(() => {
      this.updateDog();
    });
  }

  render() {
    const dog  = this.props;

    return (
      <section> 
        <Link to="request">
          <img src={dog.imageURL} alt={dog.name} />
        </Link>

        <ul>
          <li>
            Name: {dog.name}
          </li>
          <li>
            Description: {dog.imageURL}
          </li>
          <li>
            Sex: {dog.sex}
          </li>
          <li>
            Age: {dog.age}
          </li>
          <li>
            Breed: {dog.breed}
          </li>
          <li>
            Story: {dog.story}
          </li>
        </ul>
      </section>
    )
  }
};