import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing'
import DogAdoption from './Components/Dogs/DogAdoption'
import CatAdoption from './Components/Cats/CatAdoption'
import './App.css'


export function App() {
  return (
    <div className="App">
        <Switch>
          <Route 
            exact path='/' 
            render={renderProps => {
              return <Landing {...renderProps} />
            }} 
          />
          <Route 
            path='/dog-adoptions' 
            render={renderProps => {
              return <DogAdoption {...renderProps} />
            }} 
          />
          <Route 
            path='/cat-adoptions' 
            render={renderProps => {
              return <CatAdoption {...renderProps} />
            }}  
          />
        </Switch>
      </div>
  )
}


export default App;
