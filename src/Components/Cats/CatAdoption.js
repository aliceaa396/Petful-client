import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";
import UpNext from '../Adopters/UpNext';
import Queue from '../../Queue';
import CatForm from "../Cats/CatForm";

const adopters = ['Brendan','Kris','Abby','Luis','Wanda','Dwight','Andy','Martha','John','Siri','Cortona']
 const q = new Queue();
 q.enqueue('Colson')
 q.enqueue('Baker')

export default class CatAdoption extends Component {
  state = {
    currentUser: '',
    adopterLine: q,
    currentPet: {},
    cats:[],
    queue:[],
    error: null
  }
  
  getCat = () => {
    PetfulApiService.getCat()
      .then(res => res.json())
      .then(cats => {
        this.setState({ cats:cats })
     })
      .catch((error) => {
        this.setState({ error })
      })
  }

  deleteCat = () => {
    PetfulApiService.deleteCat();
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

  getQueue = () => {
    PetfulApiService.getQueue()
      .then(res => res.json())
      .then(queue => this.setState({queue, loading: false}))
      .catch((error) => {
        this.setState({ error })
      })
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

  adoptCat = () => {
    this.deleteAdopter();
    this.getCat();
    this.deleteCat();
  }
 
  componentDidMount() {
    console.log(adopters)

    const name = adopters[Math.floor(Math.random() * (adopters.length-1))+1];
    this.getCat();

    setInterval(() => {
      if(this.state.adopterLine.first && this.state.adopterLine.first.value !== this.state.currentUser) {
        let name = adopters[Math.floor(Math.random() * (adopters.length-1))];
        this.adoptCat(this.state.adopterLine.first.value, this.state.currentPet);
        this.queueUser(name)
        
      }
    }, 3000)
  }

  setCurrentUser = (name) => {
    this.setState({currentUser: name})
  }


  render() {
    const disabled = this.state.adopterLine.first && this.state.currentUser === this.state.adopterLine.first.value ? '' : 'disabled'
    const cats = this.state.cats;

    return (
      <div>
        <Link to="/request">
          <img src={cats.imageURL} alt={cats.name} />
        </Link>
        <div>
          <span>Name: </span>{cats.name} <br/>
          <span>Description: </span>{cats.imageDescription} <br/>
          <span>Sex: </span>{cats.sex} <br/>
          <span>Age: </span>{cats.age} <br/>
          <span>Breed: </span>{cats.breed} <br/>
          <span>Story: </span>{cats.story} <br/>
        </div>
        <button 
          type="click"
          className="adopt-btn"
          onClick={() => this.adoptCat(this.state.adopterLine.first.value, this.state.currentPet)}
          disabled={disabled}
        > 
          Adopt Me! 
        </button>
        <UpNext
          users={this.state.adopterLine}
        />
        <CatForm
          queueUser={this.queueUser}
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </div> 
    );

  }
}
