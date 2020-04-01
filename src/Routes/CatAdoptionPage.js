import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PetfulContext from '../Context/PetfulContext'
import AdopterList from '../Components/Adopters/AdopterList'
import CatAdoption from '../Components/Cats/CatAdoption'
import CatList from '../Components/Cats/CatList'

export class CatAdoptionPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  static contextType = PetfulContext;

  state = {
    adoptionComplete: false,
    choseCat: false
  }

  handleAdoption() {
    this.setState({
      adoptionComplete: true,
      choseCat: !this.state.choseCat
    });
  };

  renderMessage () {
    const { catAdopter, catWaitList } = this.context;
    return (
      <h3> 
        {!!catWaitList.length ? (
          <div> 
            {catWaitList[0]}, meet your new cat!
          </div>
        ) : (
          <div>
            This cat is looking for a new home. Join the wait list to adopt this cat!
          </div>
        )}

        {catAdopter === catWaitList[0] ? (
          <p> Click the button to secure this adoption </p>
        ) : (
          " "
        )}
      </h3>
    );
  }

  enableAdoptBtn () {
    const { catAdopter, catWaitList } = this.context;
    return (
      <>
        {catAdopter === catWaitList[0] ? (
          <Link to="/adoption-summary/" choseCat={this.state.choseCat}>
            <button onClick={() => this.handleAdoption()}>
              Adopt Me!
            </button>
          </Link>
        ): (
          ""
        )}
      </>
    );
  }

  renderWaitlist = () => {
    const { catWaitList } = this.context;

    return (
      <div> 
        <ul>
          {catWaitList.map((person, idx) => (
            <AdopterList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  };

  renderCat() {
    const { cat } = this.context;
    return (
      <div className="adoption-page">
        <h2> Meet {cat.name} </h2>
        <CatAdoption cat={cat} />
        {this.enableAdoptBtn()}
      </div>
    );
  }



  render() {
    const { cat } = this.context;
    return (
      <div>
        <div>
          {this.renderMessage()}
        </div>

        <div> 
          {cat && this.renderCat()}
        </div>

        <h2> Wait List </h2>
        <div> 
          {this.renderWaitlist()}
        </div>

        <Link to="/request">
          <button> Join the adoption list </button> 
        </Link>

        <h3> More Cats </h3>
        <CatList />
      </div>
    )
  }
}

export default CatAdoptionPage
