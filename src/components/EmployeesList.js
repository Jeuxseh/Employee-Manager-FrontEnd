import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import employeeServices from '../services/employeeServices';
import '../stylesheets/employee-card-list.css'

// COMPONENTE QUE RENDERIZA LA LISTA DE CARDS CON TODOS LOS EMPLEADOS QUE EL ADMIN HAYA CREADO

class EmployeesList extends Component {

  state = {
    data: [],
    employees: [],
  }
  componentDidMount() {
    this.getAllEmployees();
    this.sortEmployees(this.state.employees)
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  // CON LA SIGUIENTE FUNCIÓN OBTENEMOS LA DATA DE TODOS LOS EMPLEADOS QUE HAYAMOS
  // CREADO EN NUESTRA BASE DE DATOS

  getAllEmployees = () => {
    const timer = setTimeout(this.getAllEmployees, 20000);
    employeeServices.getAll()
      .then(data => {
        data.forEach((employee,index) => {
          this.compareDay(employee,index)
        })
        const newData = this.sortEmployees(data);
        this.setState({
          data: newData,
        })
        this.timer = timer;
      })
      .catch(err => console.log(err));
  }

  // FUNCIÓN QUE ORDENA LOS EMPLEADOS POR ESTADOS (COLORES)

  sortEmployees = (employees) => {
    const newData = employees.sort((x, y) => {
      if (x.stillWorking === true && y.stillWorking !== true) {
        return -1;
      }
      if (x.stillWorking !== true && y.stillWorking === true) {
        return 1;
      }
      if (x.stillWorking === true && y.stillWorking === true) {
        return 0;
      }
      if (x.isWorkingToday === true && y.isWorkingToday !== true) {
        return -1;
      }
      if (x.isWorkingToday !== true && y.isWorkingToday === true) {
        return 1;
      }
      if (x.isWorkingToday !== true && y.isWorkingToday !== true) {
        return 0;
      }
      return 0;
    })
    return newData;
  }

  // FUNCION QUE AÑADE LA PROPIEDAD DE ESTAR TRABAJANDO, HABER TRABAJDO, TRABAJAR MÁS TARDE O NO TRABAJAR HOY

  compareDay = (employee, index) => {
    var currentDate = new Date();
    var day = currentDate.toString().substr(0, 3).toLocaleLowerCase();
    // CONTANTE EN LA QUE ALMACENAN LAS HORAS Y LOS MINUTOS QUE SON AHORA
    const currentTime = currentDate.toString().substr(15, 16).split(':').splice(0, 2).map(timer => parseInt(timer))
    for (var key in employee.schedule) {
      // PARA CADA DIA SACAMOS LA HORA DE INICIO Y DE FINAL
      const initialHour = employee.schedule[key].initHour.split(':').map(timer => parseInt(timer));
      const finishHour = employee.schedule[key].endHour.split(':').map(timer => parseInt(timer));
      if (key.toString().substr(0, 3) === day && employee.schedule[key].initHour !== "") {
        // COMPARACIÓN DEL DÍA DE HOY CON LOS DIAS DEL EMPLEADO
        employee.isWorkingToday = true;
        if (((currentTime[0] === initialHour[0] && currentTime[1] >= initialHour[1])
          || (currentTime[0] > initialHour[0]))
          && ((currentTime[0] === finishHour[0] && currentTime[1] <= finishHour[1])
            || (currentTime[0] < finishHour[0]))) {
              // COMPARACIÓN DEL TRAMO DE TRABAJO CON LA HORA QUE ES
          employee.stillWorking = true;
        }
        if (((currentTime[0] === initialHour[0] && currentTime[1] <= initialHour[1])
          || currentTime[0] < initialHour[0])) {
          employee.beforeWork = true;
        } 
        if (((currentTime[0] === finishHour[0] && currentTime[1] >= finishHour[1])
        || currentTime[0] > finishHour[0])) {
          employee.afterWork = true;
        }
      }
    }
  }
  // RENDERIZACIÓN DE LA CARD PASÁNDOLE LA DATA QUE HEMOS REUNIDO AQUÍ
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