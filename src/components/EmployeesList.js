import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import employeeServices from '../services/employeeServices';
import '../stylesheets/employee-card-list.css'


class EmployeesList extends Component {

  state = {
    data: [],
    employees: [],
  }
  // Todo añadir estado del loading para indicar que esta carganado
  componentDidMount() {
    this.getAllEmployees();
    this.sortEmployees(this.state.employees)
  }
 

  getAllEmployees = () => {
    setTimeout(this.getAllEmployees, 20000);
    employeeServices.getAll()
      .then(data => {
       

        data.forEach((employee,index) => {
          this.compareDay(employee,index)
        })

        const newData = this.sortEmployees(data);

        this.setState({
          data:newData, 
        })


      })
      .catch(err => console.log(err));
  }

  sortEmployees = (employees) => {
    const newData = employees.sort((x,y) => {
      if(x.stillWorking === true && y.stillWorking !== true){
        return -1;
      }

      if(x.stillWorking !== true && y.stillWorking === true){
        return 1;
      }
      
      if(x.stillWorking === true && y.stillWorking === true){
        return 0;
      }

      if(x.isWorkingToday === true && y.isWorkingToday !== true){
        return -1;
      }

      if(x.isWorkingToday !== true && y.isWorkingToday === true){
        return 1;
      }

      if(x.isWorkingToday !== true && y.isWorkingToday !== true){
        return 0;
      }

      return 0;
    })
    return newData;
  }

  compareDay = (employee,index) => {
    var currentDate = new Date();
    var day = currentDate.toString().substr(0, 3).toLocaleLowerCase();
    const currentTime = currentDate.toString().substr(15, 16).split(':').map(timer => parseInt(timer)).splice(0, 2)
    for (var key in employee.schedule) {
      const finishHour = employee.schedule[key].endHour.split(':').map(timer => parseInt(timer));
      const initialHour = employee.schedule[key].initHour.split(':').map(timer => parseInt(timer));
      if (key.toString().substr(0, 3) === day && employee.schedule[key].initHour !== "") {
        employee.isWorkingToday = true;
        if (((currentTime[0] === initialHour[0] && currentTime[1] >= initialHour[1])
          || (currentTime[0] > initialHour[0]))
          && ((currentTime[0] === finishHour[0] && currentTime[1] <= finishHour[1])
            || (currentTime[0] < finishHour[0]))) {
          employee.stillWorking = true
        }
      }
    }
  }

  render() {
    return (
        <ul className="card-ul">
          {this.state.data.map(employee => (
            <EmployeeCard 
            key={employee._id}
            data={employee}
            />
          ))}
        </ul>
    );
  }
}

export default EmployeesList;