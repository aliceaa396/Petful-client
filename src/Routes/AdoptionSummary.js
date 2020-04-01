import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PetfulContext from '../Context/PetfulContext'


export class AdoptionSummary extends Component {
  static contextType = PetfulContext;

  renderDogSummary () {
    const { dogAdopter, dog, resetDogPerson } = this.context;
    return (
      <>
        <img src={dog.imageUrl} alt={dog.name} />
          <h3>Congrats {dogAdopter}!</h3>
        <p>
          You just adopted {dog.name}, a {dog.age} year old {dog.sex}{" "}
          {dog.breed}!
        </p>
        
        <Link to="/">
          <button onClick={() => resetDogPerson()}> Go back to the home page</button>
        </Link>

      </>
    )
  }

  
  renderCatSummary () {
    const { catAdopter, cat, resetCatPerson } = this.context;
    return (
      <>
        <img src={cat.imageURL} alt={cat.name} />
          <h3>Congrats {catAdopter}!</h3>
        <p>
          You just adopted {cat.name}, a {cat.age} year old {cat.sex}{" "}
          {cat.breed}!
        </p>
        
        <Link to="/">
          <button onClick={() => resetCatPerson()}> Go back to the home page</button>
        </Link>

      </>
    )
  }
  render() {
    const { dogAdopter, catAdopter } = this.context 
    return (
      <>
        {dogAdopter && this.renderDogSummary()}
        {catAdopter && this.renderCatSummary()}
      </>
    )
  }
}

export default AdoptionSummary
