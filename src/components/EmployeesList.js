import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import employeeServices from '../services/employeeServices';
import '../stylesheets/employee-card-list.css'


class EmployeesList extends Component {

  state = {
    data: []
  }
  // Todo añadir estado del loading para indicar que esta carganado
  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    employeeServices.getAll()
      .then(data => {
        this.setState({
          data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <ul>
          {this.state.data.map(employee => (
            <EmployeeCard 
            key={employee._id}
            data={employee}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default EmployeesList;