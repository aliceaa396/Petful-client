import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing'
import RequestForm from './Routes/RequestForm'
import DogAdoptionPage from './Routes/DogAdoptionPage'
import CatAdoptionPage from './Routes/CatAdoptionPage'
import AdoptionSummary from './Routes/AdoptionSummary'
import './App.css'
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/dog-adoptions' component={DogAdoptionPage} />
          <Route path='/cat-adoptions' component={CatAdoptionPage} />
          <Route path='/adoption-summary' component={AdoptionSummary} />
          <Route path='/request' component={RequestForm} />
        </Switch>
      </div>
    )
  }
}

export default App;
