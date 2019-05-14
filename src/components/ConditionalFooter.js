import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import Footer from '../components/Footer';
import FooterEmployee from '../components/FooterEmployee';

// COMPONENTE QUE RENDERIZA EL FOOTER EN FUNCIÓN DEL TIPO DE USUARIO QUE ESTÁ ACCEDIENDO

class ConditionalFooter extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <Footer/>: <FooterEmployee/>}
      </>
    );
  }
}

export default withAuth(ConditionalFooter);
