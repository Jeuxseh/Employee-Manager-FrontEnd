import React, { Component } from 'react';
import CreateEmployeeDataForm from '../components/CreateEmployeeDataForm';
import employeeService from '../services/employeeServices';


class NewEmployee extends Component {

  state = {
    error: null,
  }

  handleSubmit = (data) => {
    employeeService.createEmployee(data)
      .then((result) => {

        this.props.history.push("/");

      })
      .catch(error => {
        if (error.response.data.error) {
          this.setState({
            error: error.response.data.code,
          })
        } else {
          console.log(error)
        }
      })
  }
  render() {
    return (
      <div>
        <CreateEmployeeDataForm onSubmit={this.handleSubmit} error={this.state.error} />
      </div>
    );
  }
}

export default NewEmployee;