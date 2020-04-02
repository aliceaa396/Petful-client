import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";

export default class CatAdoption extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cat:[],
      queue:[],
      loading: true,
      error: null
    }
  }
  
  componentDidMount() {
    this.getCat();
    this.getQueue();
  }

  getCat = () => {
    PetfulApiService.getCat()
      .then(res => res.json())
      .then(cat => this.setState({ cat }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  deleteCat = () => {
    PetfulApiService.deleteCat();
      this.deleteAdopter()
      this.getCat()
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
    const cat = this.state.cat;
    console.log(this.state.cat)

    return (
      <section>
        <Link to="/request">
          <img src={cat.imageURL} alt={cat.name} />
        </Link>
        <ul>
          <li>Name: {cat.name}</li>
          <li>Description: {cat.imageURL}</li>
          <li>Sex: {cat.sex}</li>
          <li>Age: {cat.age}</li>
          <li>Breed: {cat.breed}</li>
          <li>Story: {cat.story}</li>
        </ul>
      </section>
    );
  }
}
