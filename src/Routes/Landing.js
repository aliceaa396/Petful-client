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
  

        <Link to="/cats">
          <button className="adopt-btn"> See our Cats! </button>
        </Link>
        
          
        <Link to="/dogs">
          <button className="adopt-btn"> See our Dogs! </button>
        </Link>
         
      </>
    );
  }
}

export default Landing;
