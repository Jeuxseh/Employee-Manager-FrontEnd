import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import User from '../pages/User';
import EmployeeUser from '../pages/EmployeeUser';

class ConditionalHome extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <User/>: <EmployeeUser/>}
      </>
    );
  }
}

export default withAuth(ConditionalHome);