import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import EditUserForm from '../components/EditUserForm';
import currentUserService from '../services/currentUserServices'

class User extends Component {

  state = {
    data: {},
    editing: false,
    isLoading: true,
  
  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleUpdate = (user) => {
    this.setState({
      editing: !this.state.editing,
      data: user,
    })
  }

  componentDidMount() {
    currentUserService.getCurrentUser()
      .then((data) => {
        this.setState({
          data: data[0],
          isLoading: false,
        })
      })
  }

  render() {
    const { isLoading } = this.state;
    const { username, email, phone, address, company } = this.state.data;

    switch (isLoading) {
      case true:
        return "Is Loading...";
      case false:
        return (
          <div>
            {this.state.editing && <EditUserForm onSubmit={this.handleUpdate} admin={this.state.data} />}
            {!this.state.editing &&
              <>
                <h2>My profile</h2>
                <h3>Username: {username}</h3>
                <h3>Email: {email}</h3>
                <h3>Company: {company}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Address:{address}</h3>
                <button onClick={this.handleClick}>Edit profile</button>
              </>
            }
          </div>
        );
      default:
        break;
    }

  }
}

export default withAuth(User);