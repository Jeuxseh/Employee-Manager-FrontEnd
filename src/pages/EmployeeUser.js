import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import EditUserForm from '../components/EditUserForm';
import employeeService from '../services/employeeServices'

class User extends Component {

  state = {
    data: {},
    isLoading: true,
  }
  componentDidMount() {
    employeeService.getEmployee(this.props.user._id)
      .then((data) => {
        this.setState({
          data: data[0],
          isLoading: false,
        })
      })
  }

  render() {
    const { isLoading } = this.state;
    const { username,lastname, email, phone, address } = this.props.user;

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
                <h3>Lastname: {lastname}</h3>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Address:{address}</h3>
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