import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiService";
import PetfulContext from "../../Context/PetfulContext";

export default class CatAdoption extends Component {
  static contextType = PetfulContext;

  updateCat = () => {
    const { catWaitList } = this.context;

    catWaitList.shift();

    apiService.getCats()
      .then(response => {
        this.context.setCat(response.cat);
      })
      .then(cat => {
        apiService.deleteCat().then(() => {
          if (catWaitList.length > 1) {
            setTimeout(() => {
              this.updateCat();
            }, 2000);
          }
        });
      })
      .catch({
        error: "there was an error"
      });
  };

  componentDidMount() {
    apiService.reloadCats().then(() => {
      this.updateCat();
    });
  }

  render() {
    const { cat } = this.props;

    return (
      <section>
        <Link to="/request">
          <img src={cat.imageURL} alt={cat.name} />
        </Link>
        <ul>
          <li>Name: {cat.name}</li>
          <li>Description: {cat.imageURL}</li>
          <li>Sex: {cat.sex}</li>
          <li>Age: {cat.age}</li>
          <li>Breed: {cat.breed}</li>
          <li>Story: {cat.story}</li>
        </ul>
      </section>
    );
  }
}
