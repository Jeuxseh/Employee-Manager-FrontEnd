import React, { Component } from 'react';
import currentUserService from '../services/currentUserServices';
import { withAuth } from '../providers/AuthProvider';

class EditUserForm extends Component {

  state = {
    username: this.props.admin.username,
    dni: this.props.admin.dni,
    phone: this.props.admin.phone,
    address: this.props.admin.address,
    email: this.props.admin.email,
    company: this.props.admin.company,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id } = this.props.admin;
    currentUserService.editCurrentUser(_id, this.state)
      .then((response) => {
        this.props.onSubmit(response.data);
        this.props.setUser(response.data);

      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>My profile</h2>
          <h3>Username: <input placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text" /></h3>
          <h3>Email: <input placeholder="email..." onChange={this.handleChange} value={this.state.email} name="email" type="email" /></h3>
          <h3>Company: <input placeholder="company..." onChange={this.handleChange} value={this.state.company} name="company" type="text" /></h3>
          <h3>Phone: <input placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number" /></h3>
          <h3>Address: <input placeholder="address..." onChange={this.handleChange} value={this.state.address} name="address" type="text" /></h3>
          <button type="submit">Edit User</button>
        </form>
      </div>
    );
  }
}

export default withAuth(EditUserForm);