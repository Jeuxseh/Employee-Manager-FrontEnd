import React, { Component } from 'react';
import employeeService from '../services/employeeServices'
import EditEmployeeDataForm from './EditEmployeeDataForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    const {username, lastname, dni, address, phone, email, imageUrl} = this.state.data;
    return (
      <div id="profile">
        <div className="container-employee-form-profile">
          {this.state.editing && <EditEmployeeDataForm onSubmit={this.handleUpdate} employee={this.state.data}/>}
          {!this.state.editing && 
            <>
            
            <FontAwesomeIcon icon="user" className="image-employee" />
            <h2 className='employee-h2'>{username} <span>' s Profile</span></h2>
            <div className="fields">
              <h2>Name: <span>{username}</span></h2>
              <h2>Lastname: <span> {lastname}</span></h2>
              <h2>DNI: <span> {dni}</span></h2>
              <h2>Adress: <span> {address}</span></h2>
              <h2>Phone: <span> {phone}</span></h2>
              <h2>Email: <span> {email}</span></h2>
            </div>
            <div className="buttons-container">
              <button className="edit-button" onClick={this.handleClick}>Edit Profile</button>
              <button className="delete-button"onClick={this.handleDelete}><FontAwesomeIcon icon="user-slash" /></button>
            </div>
            </>
          }
          
        </div>
      </div>
    );
  }
}

export default EmployeeProfile;