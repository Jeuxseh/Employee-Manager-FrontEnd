import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EmployeeCard extends Component {
  render() {
    const { username, _id } = this.props.data;
    return (
      <li>
        <Link to={`/calendar/${_id}`} >
          <h2>{username}</h2>
        </Link>
      </li>
    );
  }
}

export default EmployeeCard;