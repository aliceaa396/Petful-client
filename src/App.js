import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing'
import DogAdoption from './Components/Dogs/DogAdoption'
import CatAdoption from './Components/Cats/CatAdoption'
import Header from './Components/Header/Header'
import './App.css'


export function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Switch>
        <Route 
          exact path='/' 
          render={renderProps => {
            return <Landing {...renderProps} />
          }} 
        />
        <Route 
          path='/dogs' 
          render={renderProps => {
            return <DogAdoption {...renderProps} />
          }} 
        />
        <Route 
          path='/cats' 
          render={renderProps => {
            return <CatAdoption {...renderProps} />
          }}  
        />
        </Switch>
      </div>
  )
}


export default App;
