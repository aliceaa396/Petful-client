import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import SideDrawer from '../Nav/SideDrawer'
import BackDrop from '../Nav/BackDrop'


export class Header extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClick = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backDropToggleClick = () => {
    this.setState({sideDrawerOpen: false})
  }


  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropToggleClick}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Nav 
          drawerClickHandler = {this.drawerToggleClick}
        />

        <SideDrawer 
          show={this.state.sideDrawerOpen}
        />
        
        {backDrop}
      </div>
    )
  }
}

export default Header;
