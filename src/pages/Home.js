import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Workers Status</h1>
        <Link to="/employee/new"><FontAwesomeIcon icon="user-plus" className="icon-userAdd"/></Link>
        <EmployeesList />
      </div>
    );
  }
}

export default Home;

//faUserPlus