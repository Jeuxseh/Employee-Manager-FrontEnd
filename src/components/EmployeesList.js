import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import employeeServices from '../services/employeeServices';


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
      <div>
        <ul>
          {this.state.data.map(employee => (
            <EmployeeCard 
            key={employee._id}
            data={employee}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeesList;