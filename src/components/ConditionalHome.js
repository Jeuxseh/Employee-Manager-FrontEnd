import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import Home from '../pages/Home';
import EmployeeHome from '../pages/EmployeeHome';

class ConditionalHome extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <Home/>: <EmployeeHome/>}
      </>
    );
  }
}

export default withAuth(ConditionalHome);