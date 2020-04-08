import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetfulApiService from "../../services/PetfulApiService";

export default class DogAdoption extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dogs:[],
      queue:[],
      loading: true,
      yourTurn: false,
      error: null
    }
  }

  getDog = () => {
    PetfulApiService.getDog()
    .then(res => res.json())
    .then(dogs => {
      this.setState({ dogs })
   })
    .catch((error) => {
      this.setState({ error })
    })
  }

  deleteDog = () => {
    PetfulApiService.deleteDog();
      this.deleteAdopter();
      this.getDog();
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
  };

  // enableBtn = () => {
  //   if(this.state.yourTurn === false) {

  //   }
  // }

  // adopterBtn = () => {
  //   if(q.name === 'you') {
  //     this.setState({yourTurn: true})
  //   } else {
  //     this.setState({yourTurn: false})
  //   }
  // }
 

  componentDidMount() {
    setInterval(() => {
      this.getDog();
      this.deleteDog();
      this.deleteAdopter();
    }, 3000)
    
  }

  render() {
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
          onClick={() => this.deleteDog()}
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
