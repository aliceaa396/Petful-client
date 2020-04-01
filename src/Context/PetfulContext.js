import React, { Component } from 'react';

const PetfulContext = React.createContext({
  dogWaitList: [],
  catWaitList: [],
  dog: {},
  cat : {},
  nextDog: {},
  nextCat: {},
  dogAdopter: '',
  catAdopter: '',
  setDogPerson: () => { },
  setCatPerson: () => { },
  resetDogPerson: () => {},
  resetCatPerson: () => { },
  setDog: () => { },
  setCat: () => { },
  setDogWaitList: () => { },
  setCatWaitList: () => { },
  setError: () => { },
  clearError: () => { }
});

export default PetfulContext;

export class PetProvider extends Component {
  state = {
    dogWaitList: ["Angel", "Brendan", "Kris", "Abby", "Anna"],
    catWaitList: ["Lexie", "Amanda", "Nidall", "Corey", "Steve"],
    dog: {},
    cat: {},
    nextDog: {},
    nextCat: {},
    dogAdopter: "",
    catAdopter: "",
    yourTurn: false,
    setDogPerson: () => {},
    setCatPerson: () => {},
    setDogWaitList: () => {},
    setCatWaitList: () => {},
    current: {
      person: "",
      touched: false
    }
  };

  setDogPerson = dogAdopter => {
    this.setState({ dogAdopter })
  };

  resetDogPerson = () => {
    this.setState({ dogAdopter: " " })
  };

  setCatPerson = catAdopter => {
    this.setState({ catAdopter })
  };

  resetCatPerson = () => {
    this.setState({ catAdopter: " " })
  };

  setDogWaitList = person => {
    this.setState({ dogWaitList: [...this.state.dogWaitList, person]});
  };

  setCatWaitList = person => {
    this.setState({ catWaitList: [...this.state.catWaitList, person]});
  };

  setDog = dog => {
    this.setState({ dog })
  };

  setCat = cat => {
    this.setState({ cat })
  };

  setAllDogs = resData => {
    this.setState({ 
      error: null,
      nextDog: {...resData }
    })
  };

  setAllCats = resData => {
    this.setState({ 
      error: null,
      nextCat: {...resData }
    })
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  };

  clearError = () => {
    this.setState({error: null})
  };

  render() {
    const value = {
      dog: this.state.dog,
      cat: this.state.cat,
      setDog: this.state.setDog,
      setDogPerson: this.state.setDogPerson,
      setAllDogs: this.state.setAllDogs,
      setDogWaitList: this.state.setDogWaitList,
      setCat: this.state.setCat,
      setCatPerson: this.state.setCatPerson,
      setCatWaitList: this.state.setCatWaitList,
      setAllCats: this.state.setAllCats,
      nextDog: this.state.nextDog,
      nextCat: this.state.nextCat,
      dogWaitList:this.state.dogWaitList,
      catWaitList: this.state.catWaitList,
      dogAdopter: this.state.dogAdopter,
      resetDogPerson: this.state.resetDogPerson,
      catAdopter: this.state.catAdopter,
      resetCatPerson: this.state.resetCatPerson,
      currentPerson: this.state.currentPerson,
      setError: this.state.setError,
      clearError: this.state.clearError
    }
    return (
      <PetfulContext.Provider value={value}>
        {this.props.children}
      </PetfulContext.Provider>
    );
  }
}