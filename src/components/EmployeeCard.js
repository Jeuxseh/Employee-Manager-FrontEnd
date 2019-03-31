import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/employee-card.css';


class EmployeeCard extends Component {

  state = {
    currentInitHour: '',
    currentEndHour: '',
    currentDay: '',
    formatDate: '',
    isWorkingToday: false,
    stillWorking: false,
  }

  componentDidMount() {
    this.getCurrentDay();
    this.getSchedule(this.props.data.schedule);
    this.compareDay(this.props.data.schedule);

  }

  getCurrentDay = () => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());  
    this.setState({
      currentDay: currentDate
    })
  }

  getSchedule = (obj) => {
    var day = this.state.currentDay.toString().substr(0, 3).toLocaleLowerCase();
    for (var key in obj) {
      if (key.toString().substr(0, 3) === day) {
        this.setState({
          currentInitHour: obj[key].initHour,
          currentEndHour: obj[key].endHour
        })
      }
    }
  }

  compareDay = (obj) => {
    var currentDate = new Date();
    var day = currentDate.toString().substr(0, 3).toLocaleLowerCase();  
    const currentTime = currentDate.toString().substr(15,16).split(':').map(timer => parseInt(timer)).splice(0,2)
    for (var key in obj) {
      const finishHour = this.props.data.schedule[key].endHour.split(':').map(timer => parseInt(timer));
      const initialHour = this.props.data.schedule[key].initHour.split(':').map(timer => parseInt(timer));
      if (key.toString().substr(0, 3) === day && this.props.data.schedule[key].initHour !== "") {
                      // console.log('Hora de hoy: ' + currentTime);
                      // console.log(currentTime)
                      // console.log('Hora de inicio: ' + this.props.data.schedule[key].initHour)
                      // console.log(this.props.data.schedule[key].initHour.split(':').map(timer => parseInt(timer)))
        this.setState({
          isWorkingToday: true,
        })
        // if(((currentTime[0] >= initialHour[0] && currentTime[1] >= initialHour[1]) 
        // || (currentTime[0] >= initialHour[0] && currentTime[1] <= initialHour[1])) 
        // && ((currentTime[0] <= finishHour[0] && currentTime[1] <= finishHour[1]) 
        // || (currentTime[0] <= initialHour[0] && currentTime[1] >= initialHour[1])) ){
        //   console.log('Estoy trabajando')
        // } else {
        //   console.log('No estoy trabajndo')
        // }
        if(((currentTime[0] >= initialHour[0] && currentTime[1] >= initialHour[1]) 
        || (currentTime[0] >= initialHour[0] && currentTime[1] <= initialHour[1])) 
        && ((currentTime[0] <= finishHour[0] && currentTime[1] <= finishHour[1]) 
        || (currentTime[0] <= finishHour[0] && currentTime[1] >= finishHour[1])) ){
          console.log('Estoy trabajando')
        } else {
          console.log('No estoy trabajndo')
        }
      } else {
        this.setState({
          isWorkingToday: false,
        })
      }
    }
  }

  compareTime = (obj) => {
    for (var key in obj){

    }
  }



  render() {
    const { username, _id } = this.props.data;
    return (
      <div className="card-container">
        <li className="card">
          <Link to={`/calendar/${_id}`} >
            <img src="https://www.uic.mx/posgrados/files/2018/05/default-user.png" alt="hola" />
            <h2>{username}</h2>
          </Link>
          <div>
            {this.state.isWorkingToday && 'isWorkingToday'}
            {!this.state.isWorkingToday && 'isNotWorkingToday'}
          </div>
        </li>
      </div>
    );
  }
}

export default EmployeeCard;