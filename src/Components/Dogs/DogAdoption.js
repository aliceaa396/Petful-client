import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";

export default class DogAdoption extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dog:[],
      queue:[],
      loading: true,
      error: null
    }
  }
  
  componentDidMount() {
    this.getDog();
    this.getQueue();
  }

  getDog = () => {
    PetfulApiService.getDog()
      .then(res => res.json())
      .then(dog => this.setState({ dog }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  deleteDog = () => {
    PetfulApiService.deleteDog();
      this.deleteAdopter()
      this.getDog()
  }

  getQueue = () => {
    PetfulApiService.getQueue()
      .then(res => res.json())
      .then(queue => this.setState({queue, loading: false}))
      .catch((error) => {
        this.setState({ error })
      })
  }

  deleteAdopter = () => {
    PetfulApiService.deleteAdopter();
    this.getQueue();
  }

  displayQ = (q) => {
    let str = "";
    let currNode = q.first
    while(currNode !== null) {
      str += currNode.value.name + ', ';
      currNode = currNode.next;
    }
    return (str);
  }

  displayLoading = () => {
    return this.state.loading ? (
      <h3> Loading List. . .</h3>
    ) : (
      this.displayQ(this.state.queue)
    )
  }


  render() {
    const dog  = this.state.dog;

    return (
      <section>
        {/* <Link to="/request">
          <img src={dog.imageURL} alt={dog.name} />
        </Link> */}
        <div>
          <span>Name: </span>{dog.name}
          <span>Description: </span>{dog.imageURL}
          <span>Sex: </span>{dog.sex}
          <span>Age: </span>{dog.age}
          <span>Breed: </span>{dog.breed}
          <span>Story: </span>{dog.story}
        </div>
      </section>
    );
  }
}
