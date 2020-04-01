import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PetfulContext from '../../Context/PetfulContext';
import './Form.css'
export default class Form extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  static contextType = PetfulContext;
  
  state = {
    catAdopter: "",
    dogAdopter: ""
  };

  handleSubmitCat = e => {
    e.preventDefault();
    const { setCatWaitList, setCatPerson } = this.context;
    const { catName } = e.target;
    setCatWaitList(catName.value);
    setCatPerson(catName.value);
    catName.value = "";
  }


  handleSubmitDog = e => {
    e.preventDefault();
    const { setDogWaitList, setDogPerson } = this.context;
    const { dogName } = e.target;
    setDogWaitList(dogName.value);
    setDogPerson(dogName.value);
    dogName.value = "";
  }

  render() {
    return (
      <div className="container">
        <form className="submission-form" onSubmit={this.handleSubmitCat}>
          <label className="form-name">
            Adopt a Cat
          </label>
          <input
            type="text"
            className="add-name-input"
            name="catName"
            id="form-name"
            onChange={e => this.setState({ catAdopter: e.target.value})}
          />
          <button className="adopt-btn" type="submit"> Join the Waiting List </button>

          <Link to="/cat-adoptions">
            <button className="adopt-btn"> See all of our Cats! </button>
          </Link>
        </form>

        <form className="submission-form" onSubmit={this.handleSubmitDog}>
          <label className="form-name">
            Adopt a Dog
          </label>
          <input
            type="text"
            className="add-name-input"
            name="dogName"
            id="form-name"
            onChange={e => this.setState({ dogAdopter: e.target.value})}
          />
          <button className="adopt-btn" type="submit"> Join the Waiting List </button>

          <Link to="/dog-adoptions">
            <button className="adopt-btn"> See all of our Dogs! </button>
          </Link>
        </form>


      </div>
    )
  }
}
