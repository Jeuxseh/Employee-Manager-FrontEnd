import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
// import currentUserService from '../services/currentUserServices';

class User extends Component {

  // state = {
  //   data:{}
  // }

  // componentDidMount(){
  //   this.currentUser();
  // }

  // currentUser = () => {
  //   currentUserService.getCurrentUser()
  //     .then(data => {
  //       this.setState({
  //         data
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    // const{username, password, adress, phone, email, company} = this.state.data;
    // console.log(this.state)
    const {username, password, email, phone, address, company } = this.props.user;
    return (
      <div>
        <h2>My profile</h2>
        <h3>{username}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{address}</h3>
        <h3>{company}</h3>
      </div>
    );
  }
}

export default withAuth(User);