import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";
import UpNext from '../Adopters/UpNext';
import Queue from '../../Queue';
import DogForm from "../Dogs/DogForm";
import './DogForm.css'

 const adopters = ['Brendan','Kris','Abby','Luis','Wanda','Dwight','Andy','Martha','John','Siri','Cortona']
 const q = new Queue();
 q.enqueue('Marshall')
 q.enqueue('Mathers')
export default class DogAdoption extends Component {
 
  state = {
    currentUser: '',
    adopterLine: q,
    currentPet: {},
    dogs:[],
    queue:[],
    error: null
  }


  getDog = () => {
    PetfulApiService.getDog()
    .then(res => res.json())
    .then(dogs => {
      this.setState({ dogs:dogs})
   })
    .catch((error) => {
      this.setState({ error })
    })
  }

  deleteDog = () => {
    PetfulApiService.deleteDog();
  }


  deleteAdopter = () => {
    const q = new Queue();
    let node = this.state.adopterLine.first.next;
    while(node !== null) {
      q.enqueue(node.value)
      node = node.next
    }
    if (this.state.currentUser === this.state.adopterLine.first.value) {
      this.setState({ currentUser: ''})
    } else {
      this.setState({adopterLine: q})
    }
  }

  queueUser = (name) => {
    const q = new Queue();
    let node = this.state.adopterLine.first;
    while(node !== null) {
      q.enqueue(node.value)
      node = node.next
    }
    q.enqueue(name);
    this.setState({adopterLine: q})
  }

  adoptDog = () => {
    this.deleteAdopter();
    this.getDog();
    this.deleteDog();
  }

 
  componentDidMount() {

    const name = adopters[Math.floor(Math.random() * (adopters.length-1))+1];
    this.getDog();

    setInterval(() => {
      if(this.state.adopterLine.first && this.state.adopterLine.first.value !== this.state.currentUser) {
        let name = adopters[Math.floor(Math.random() * (adopters.length-1))];
        this.adoptDog(this.state.adopterLine.first.value, this.state.currentPet);
        this.queueUser(name)
        
      }
    }, 3000)
  }

  setCurrentUser = (name) => {
    this.setState({currentUser: name})
  }

  render() {
    const disabled = this.state.adopterLine.first && this.state.currentUser === this.state.adopterLine.first.value ? '' : 'disabled'
    const dogs  = this.state.dogs;

    return (
      <div>
        <Link to="/request">
          <img src={dogs.imageURL} alt={dogs.name} />
        </Link>
        <div>
          <span>Name: </span>{dogs.name} <br/>
          <span>Description: </span>{dogs.imageDescription} <br/>
          <span>Sex: </span>{dogs.sex} <br/>
          <span>Age: </span>{dogs.age} <br/>
          <span>Breed: </span>{dogs.breed} <br/>
          <span>Story: </span>{dogs.story} <br/>
        </div>
        <button 
          type="click"
          className="adopt-btn"
          onClick={() => this.adoptDog(this.state.adopterLine.first.value, this.state.currentPet)}
          disabled={disabled}
        > 
          Adopt Me! 
        </button>
        <UpNext
          users={this.state.adopterLine}
        />
        <DogForm
          queueUser={this.queueUser}
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />

        {/* <div>
          <h3> Place in Line </h3>
          {this.displayLoading()}
        </div> */}
      </div> 
    );
  }
}
