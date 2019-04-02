import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/employee-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EmployeeCard extends Component {

  state = {
    data: {},
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

  render() {
    const { username, lastname, _id, isWorkingToday, stillWorking, phone } = this.props.data;
    // const {monday, tuesday, wedne}
    return (
      <div className="card-container">
        <li className="card">
          <div>
            <Link to={`/calendar/${_id}`} >
              <FontAwesomeIcon icon="user" className="icon-card"/>
            </Link>
          </div>
          <div className="name-card">
            <Link to={`/calendar/${_id}`} >
              <h2>{lastname}, {username}</h2>
            </Link>
          </div>
          <div>

            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div>
          {!isWorkingToday ? <p>Dont Work today</p> : stillWorking ? <p>Working</p> : <p>Out of time</p>}
          </div>
          {!isWorkingToday ? <div className="red-box"></div> : stillWorking ? <div className="green-box"></div> : <div className="yellow-box"></div>}
        </li>
      </div>
    );
  }
}

export default EmployeeCard;