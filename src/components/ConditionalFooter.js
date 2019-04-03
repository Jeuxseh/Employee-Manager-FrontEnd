import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import Footer from '../components/Footer';
import FooterEmployee from '../components/FooterEmployee';

class ConditionalHome extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <Footer/>: <FooterEmployee/>}
      </>
    );
  }
}

export default withAuth(ConditionalHome);