import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Form.css'
export default class Form extends Component {
  state = {
    adopterName:""
  };

  handleSubmitCat = (e) => {
    e.preventDefault();
    this.props.setCurrentUser(this.state.adopterName)
    const { queueUser } = this.props;
    queueUser(this.state.adopterName)
    this.setState({
      adopterName: ""
    })
  };

  
  handleAdopter = (e) => {
    this.setState({
      adopterName: e.target.value
    })
  };

  render() {
    const disabled = (this.props.currentUser !== ' ') ? 'disabled' : ' ';
    return (
      <div className="container">
        <form className="submission-form">
          <label className="form-name">
            Adopt a Cat
          </label>
          <input
            type="text"
            className="add-name-input"
            name="catName"
            id="form-name"
            onChange={e => this.handleAdopter(e)}
          />
          <button className="adopt-btn" type="submit" onClick={e => this.state.handleSubmitCat(e)} disabled={disabled}> Join the Waiting List </button>

          <Link to="/cat-adoptions">
            <button className="adopt-btn"> See all of our Cats! </button>
          </Link>
        </form>

        <form className="submission-form">
          <label className="form-name">
            Adopt a Dog
          </label>
          <input
            type="text"
            className="add-name-input"
            name="dogName"
            id="form-name"
            onChange={e => this.handleAdopter(e)}
          />
          <button className="adopt-btn" type="submit"onClick={e => this.state.handleSubmitDog(e)}> Join the Waiting List </button>

          <Link to="/dogs">
            <button className="adopt-btn"> See all of our Dogs! </button>
          </Link>
        </form>


      </div>
    )
  }
}
