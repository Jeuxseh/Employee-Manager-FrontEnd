import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList';
import '../stylesheets/employee-card-list.css'
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div id="employee-status">

        <h1 className="title">Workers Status</h1>
        <Link to="/employee/new"><img src="../images/new-user.png" alt="new-employee" /></Link>
        <EmployeesList />

      </div>
    );
  }
}

export default Home;