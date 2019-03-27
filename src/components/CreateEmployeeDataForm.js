import React, { Component } from 'react';

class CreateEmployeeDataForm extends Component {

  state = {
    username: '',
    dni: '',
    password: '',
    phone: '',
    address: '',
    email: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: '',
      dni: '',
      password: '',
      phone: '',
      address: '',
      email: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text"/>
          <input placeholder="dni..." onChange={this.handleChange} value={this.state.dni} name="dni" type="text"/>
          <input placeholder="password..." onChange={this.handleChange} value={this.state.password} name="password" type="text"/>
          <input placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number"/>
          <input placeholder="address..." onChange={this.handleChange} value={this.state.address} name="address" type="text"/>
          <input placeholder="email..." onChange={this.handleChange} value={this.state.email} name="email" type="email"/>
          <button type="submit">Create Employee</button>
        </form>
      </div>
    );
  }
}

export default CreateEmployeeDataForm;