import React, { Component } from 'react';
import employeeService from '../services/employeeServices'
import Footer from './Footer';
import EditEmployeeDataForm from './EditEmployeeDataForm';

class EmployeeProfile extends Component {

  state = {
    data: {},
    editing: false
  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleUpdate = (user) => {
    this.setState({
      editing: !this.state.editing,
      data: user
    })
  }

  handleDelete = () => {
    const {id} = this.props.match.params;
    employeeService.deleteEmployee(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.getOneEmployee()
  }

  getOneEmployee = () => {
    const {id} = this.props.match.params;
    employeeService.getEmployee(id)
      .then(data=> {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {username, dni, address, phone, email} = this.state.data;
    return (
      <div>
        {this.state.editing && <EditEmployeeDataForm onSubmit={this.handleUpdate} employee={this.state.data}/>}
        {!this.state.editing && 
          <>
          <h2>Name: {username}</h2>
          <h2>DNI: {dni}</h2>
          <h2>Adress: {address}</h2>
          <h2>Phone: {phone}</h2>
          <h2>Email: {email}</h2>
          <button onClick={this.handleClick}>Edit profile</button>
          <button onClick={this.handleDelete}>Delete Employee</button>
          </>
        }
        <Footer/>
      </div>
    );
  }
}

export default EmployeeProfile;