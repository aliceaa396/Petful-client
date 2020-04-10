import React, { Component } from 'react'

export class UpNext extends Component {
  render() {
    let { users } = this.props;
    const usersArr = []
    let node = users.first;
    while(node) {
      usersArr.push(node.value);
      node = node.next
    }
    return (
      <div>
        <h3> In Line To Adopt </h3>
        <ul>
          {usersArr.map((user, i) => {
            return <li key={i}> {user} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default UpNext;
