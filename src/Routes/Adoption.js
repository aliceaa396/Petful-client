import React, { Component } from 'react';
import PetfulApiService from '../services/PetfulApiService';
import PetfulContext from '../Context/PetfulContext';
import AdopterList from '../Components/Adopters/AdopterList';
import { adoptionQueue, adopterNames } from '../Queue';
import { withRouter } from 'react-router-dom';
import DogAdoption from '../Components/Dogs/DogAdoption';
import CatAdoption from '../Components/Cats/CatAdoption';


export class Adoption extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  static contextType = PetfulContext;

  handleName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  submitName = e => {
    e.preventDefault();
    let ownerName = this.state.name;
    adoptionQueue.enqueue(ownerName);
    this.setState({
      registered: true,
      numInLine: adoptionQueue.length
    });
  };

  message = () => {
    if (this.state.currentNewOwner && !this.state.turnToAdopt) {
      return `Congrats to ${this.state.currentNewOwner} and their new pet ${this.state.currentPet}`
    }
  }

  updateDog = () => {
    PetfulApiService.getDogs().then(response => {
      this.setState({
        dog: response.dog
      });
    });
  };

  componentDidMount() {
    this.context.clearError();
    PetfulApiService.getDogs()
    .then(this.context.setDog)
    .then(() => this.updateDog())
    .catch(this.context.setError)
  }

  enableAdoptBtn(pet) {
    return (
      <>
        <button type="button"> Adopt Me! </button>
      </>
    )
  }

  renderWaitList() {
    const { waitList } = this.context;
    return (
      <div>
        <h2>
          WaitList
        </h2>
        <ul>
          {waitList.map((person, idx) => (
            <AdopterList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  }

  removePerson(idx) {
    const newWaitList = this.context.waitList.filter(index => index !== idx);
    this.setState({
      waitList: [...newWaitList]
    });
  }

  renderCat() {
    const { cat } = this.context;
    return (
      <div className="adoption-page">
        <h2> Meet {cat.name} </h2>
        <CatAdoption cat={cat} />
        {this.enableAdoptBtn()}
      </div>
    );
  }

  renderDog() {
    const { dog } = this.context;
    return (
      <div className="adoption-page">
        <h2> Meet {dog.name} </h2>
        <DogAdoption dog={dog} />
        {this.enableAdoptBtn()}
      </div>
    );
  }

  render() { 
    const { cat, dog } = this.context;
    return (
      <div>
        <h3> Next up to adopt: </h3>
        <div>
          {cat &&  this.renderCat()}
          {dog && this.renderDog()}
        </div>
      </div>
    )
  }
}

export default Adoption
