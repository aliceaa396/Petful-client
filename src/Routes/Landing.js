import React, { Component } from "react";
import { Link } from "react-router-dom";
import stockCD from "../Images/stockCD.jpg";
import "./Landing.css";
export class Landing extends Component {
  render() {
    return (
      <>
        <div>
          <h2> Adopt a Pet! </h2>
          <img className="hero" src={stockCD} />
          <p>Start the adoption process now and get on our wait list!</p>
        </div>
        <div className="container">
          <form className="submission-form">
            <label className="form-name">Adopt a Cat</label>
            <input
              type="text"
              className="add-name-input"
              name="catName"
              id="form-name"
            />
            <button className="adopt-btn" type="submit">
              Get on Line
            </button>

            <Link to="/cats">
              <button className="adopt-btn"> See our Cats! </button>
            </Link>
          </form>

          <form className="submission-form">
            <label className="form-name">Adopt a Dog</label>
            <input
              type="text"
              className="add-name-input"
              name="dogName"
              id="form-name"
            />
            <button className="adopt-btn" type="submit">
              Get on Line
            </button>
            <Link to="/dogs">
              <button className="adopt-btn"> See our Dogs! </button>
            </Link>
          </form>
        </div>
      </>
    );
  }
}

export default Landing;
