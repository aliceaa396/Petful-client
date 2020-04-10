import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogForm.css'
export class DogForm extends Component {
  state = {
    adopterName:""
  };

  handleSubmitDog(e){
    e.preventDefault();
    this.props.setCurrentUser(this.state.adopterName)
    const { queueUser } = this.props;
    queueUser(this.state.adopterName)
    this.setState({
      adopterName: ""
    })
  };

  handleAdopter(e){
    this.setState({
      adopterName: e.target.value
    })
  };


  render() {
    // const disabled = (this.props.currentUser !== ' ') ? 'disabled' : ' ';
    return (
      <div>
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
          <button 
            className="list-btn" 
            type="submit"onClick={e => this.handleSubmitDog(e)}
          > 
            Join the Waiting List 
          </button>

          <Link to="/dogs">
            <button className="list-btn"> See all of our Dogs! </button>
          </Link>
        </form>

      </div>
    )
  }
}

export default DogForm
