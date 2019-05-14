import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList';
import '../stylesheets/employee-card-list.css'

class Home extends Component {
  render() {
    return (
      <div id="employee-status">

        <h1 className="title">Workers Status</h1>
        <EmployeesList />
      </div>
    );
  }
}

export default Home;
