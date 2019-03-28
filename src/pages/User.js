import React, { Component } from 'react';
import Footer from '../components/Footer';
// import { withAuth } from '../providers/AuthProvider';
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
    return (
      <div>
        <h2>My profile</h2>

        <Footer />
      </div>
    );
  }
}

export default User;