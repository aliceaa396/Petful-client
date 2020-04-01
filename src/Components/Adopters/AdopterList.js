import React, { Component } from 'react'

export class AdopterList extends Component {
  render() {
    const { person } = this.props;

    return (
      <>
        <li className="list">
          {person}
        </li>
      </>
    )
  }
}

export default AdopterList
