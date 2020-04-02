import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <h2> Welcome to Petful! </h2>
          <h3> Help furry friends find a home! </h3>
        </header>

        <div className="container">
        <p>Start the adoption process now and get on our wait list!</p>
          <form className="submission-form" onSubmit={this.handleSubmitCat}>
            <label className="form-name">Adopt a Cat</label>
            <input
              type="text"
              className="add-name-input"
              name="catName"
              id="form-name"
              onChange={e => this.setState({ catAdopter: e.target.value })}
            />
            <button className="adopt-btn" type="submit">
              {" "}
              Join the Waiting List{" "}
            </button>

            <Link to="/cat-adoptions">
              <button className="adopt-btn"> See all of our Cats! </button>
            </Link>
          </form>

          <form className="submission-form" onSubmit={this.handleSubmitDog}>
            <label className="form-name">Adopt a Dog</label>
            <input
              type="text"
              className="add-name-input"
              name="dogName"
              id="form-name"
              onChange={e => this.setState({ dogAdopter: e.target.value })}
            />
            <button className="adopt-btn" type="submit">
              {" "}
              Join the Waiting List{" "}
            </button>

            <Link to="/dog-adoptions">
              <button className="adopt-btn"> See all of our Dogs! </button>
            </Link>
          </form>
        </div>
        
      </div>
    );
  }
}

export default Landing;
