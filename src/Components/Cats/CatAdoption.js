import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";

export default class CatAdoption extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cats:[],
      queue:[],
      loading: true,
      error: null
    }
  }
  
  getCat = () => {
    PetfulApiService.getCat()
      .then(res => res.json())
      .then(cats => {
        this.setState({ cats })
     })
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
    let str = '';
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

  componentDidMount() {
    this.getCat();
    this.getQueue();
  }


  render() {
    const cats = this.state.cats;
    console.log(this.state.queue)

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
          onClick={() => this.deleteCat()}
        > 
          Adopt Me! 
        </button>

        <div>
          <h3> Place in Line </h3>
          {this.displayLoading()}
        </div>
      </div> 
    );

  }
}
