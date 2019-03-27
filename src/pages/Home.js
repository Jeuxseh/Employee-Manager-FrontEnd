import React, { Component } from 'react';
import NewEmployee from '../pages/NewEmployee';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/employee/new" component={NewEmployee}>Create Employee</Link>
      </div>
    );
  }
}

export default Home;