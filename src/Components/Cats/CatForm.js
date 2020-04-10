import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CatForm.css'
export class CatForm extends Component {
  state = {
    adopterName:""
  };

  handleSubmitCat(e){
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
    return (
      <div>
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
          <button 
            className="list-btn" 
            type="submit"onClick={e => this.handleSubmitCat(e)}
          > 
            Join the Waiting List 
          </button>

          <Link to="/cats">
            <button className="list-btn"> See all of our Cats! </button>
          </Link>
        </form>

      </div>
    )
  }
}

export default CatForm;
