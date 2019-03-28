import React, { Component } from 'react';
import employeeService from '../services/employeeServices'
import Footer from './Footer';



class EmployeePofile extends Component {

  state = {
    data: {}
  }

  componentDidMount(){
    this.getOneEmployee()
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
    const {username, dni, address, phone, email} = this.state.data;
    return (
      <div>

        <h2>Name: {username}</h2>
        <h2>DNI: {dni}</h2>
        <h2>Adress: {address}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Email: {email}</h2>
        <button>Edit</button>
        <Footer/>
      </div>
    );
  }
}

export default EmployeePofile;