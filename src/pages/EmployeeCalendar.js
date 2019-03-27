import React, { Component } from 'react';
import Footer from '../components/Footer';
import employeeService from '../services/employeeServices';

class EmployeeCalendar extends Component {

  state = {
    data:{}
  }

  componentDidMount() {
    this.getOneEmployee();
  }

  getOneEmployee = () => {
    const {id} = this.props.match.params;
    employeeService.getOne(id)
      .then(data=> {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>Calendar {this.state.data.username}</h1>
        <Footer/>
      </div>
    );
  }
}

export default EmployeeCalendar;