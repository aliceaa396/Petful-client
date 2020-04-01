import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PetfulContext from '../Context/PetfulContext'
import AdopterList from '../Components/Adopters/AdopterList'
import DogAdoption from '../Components/Dogs/DogAdoption'
import DogList from '../Components/Dogs/DogList'

export class DogAdoptionPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  static contextType = PetfulContext;

  state = {
    adoptionComplete: false,
    choseDog: false
  }

  handleAdoption() {
    this.setState({
      adoptionComplete: true,
      choseDog: !this.state.choseDog
    });
  };

  renderMessage () {
    const { dogAdopter, dogWaitlist } = this.context;
    return (
      <h3> 
        {!!dogWaitlist.length ? (
          <div> 
            {dogWaitlist[0]}, meet your new dog!
          </div>
        ) :
        (
          <div>
            This dog is looking for a new home. Join the wait list to adopt this dog!
          </div>
        )}
        {dogAdopter === dogWaitlist[0] ? (
          <p> Click the button to secure this adoption </p>
        ):
        (
          ""
        )}
      </h3>
    );
  }

  enableAdoptBtn () {
    const { dogAdopter, dogWaitlist } = this.context;
    return (
      <>
        {dogAdopter === dogWaitlist[0] ? (
          <Link to="/about/" choseDog={this.state.choseDog}>
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
    const { dogWaitlist } = this.context;

    return (
      <div> 
        <ul>
          {dogWaitlist.map((person, idx) => (
            <AdopterList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  };

  renderDog() {
    const { dog } = this.context;
    return (
      <div className="adoption-page">
        <h2> Meet {dog.name} </h2>
        <DogAdoption dog={dog} />
        {this.enableAdoptBtn()}
      </div>
    );
  }



  render() {
    const { dog } = this.context;
    return (
      <div>
        <div>
          {this.renderMessage()}
        </div>

        <div> 
          {dog && this.renderDog()}
        </div>

        <h2> Wait List </h2>
        <div> 
          {this.renderWaitlist()}
        </div>

        <Link to="/request">
          <button> Join the adoption list </button> 
        </Link>

        <h3> More Dogs </h3>
        <DogList />
      </div>
    )
  }
}

export default DogAdoption
