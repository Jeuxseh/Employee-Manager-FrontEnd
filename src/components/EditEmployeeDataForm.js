import React, { Component } from 'react';
import employeeService from '../services/employeeServices';

class EditEmployeeDataForm extends Component {

  state = {
    username: this.props.employee.username,
    dni: this.props.employee.dni,
    phone: this.props.employee.phone,
    address: this.props.employee.address,
    email: this.props.employee.email,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {_id}= this.props.employee;
    employeeService.editEmployee(_id,this.state)
    .then((response) => {
      this.props.onSubmit(response.data);
    })
      .catch(err => console.log(err))
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
          <h2>Name: <input placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text"/></h2>
          <h2>DNI: <input placeholder="dni..." onChange={this.handleChange} value={this.state.dni} name="dni" type="text"/></h2>
          <h2>Adress: <input placeholder="address..." onChange={this.handleChange} value={this.state.address} name="address" type="text"/></h2>
          <h2>Phone: <input placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number"/></h2>
          <h2>Email: <input placeholder="email..." onChange={this.handleChange} value={this.state.email} name="email" type="email"/></h2>
          <button type="submit">Edit Employee</button>    
        </form>
      </div>
    );
  }
}

export default EditEmployeeDataForm;