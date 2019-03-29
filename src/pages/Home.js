import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Workers Status</h1>
        <Link to="/employee/new"><img src="../images/new-user.png" alt="new-employee"/></Link>
        <EmployeesList />
        <Footer />
      </div>
    );
  }
}

export default Home;