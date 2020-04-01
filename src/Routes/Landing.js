import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <h2> Welcome to Petful! </h2>
          <h3> Help find furry friends a home! </h3>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Start the adoption process now and get on our wait list!
        </p>
        <Link to="/request">
          <button> Get Started! </button>
        </Link>
      </div>
    );
  }
}

export default Landing;
