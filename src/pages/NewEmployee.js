import React, { Component } from 'react';
import CreateEmployeeDataForm from '../components/CreateEmployeeDataForm';
import employeeService from '../services/employeeServices';


class NewEmployee extends Component {

  handleSubmit = (data) => {
    employeeService.createEmployee(data)
      .then((result)=> {
        this.props.history.push("/");
      }) 
  }
  render() {
    return (
      <div>
        <CreateEmployeeDataForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default NewEmployee;