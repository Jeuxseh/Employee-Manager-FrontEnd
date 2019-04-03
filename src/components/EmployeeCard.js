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
  }

  componentDidMount() {
    this.getSchedule(this.props.data.schedule);
  }

  getSchedule = (obj) => {
    var currentDate = new Date();
    var day = currentDate.toString().substr(0, 3).toLocaleLowerCase();
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
    const { username, lastname, _id, isWorkingToday, stillWorking, beforeWork, phone, imageUrl } = this.props.data;
    return (
      <div className="card-container">
        <li className="card">
          {/* Div Imagen */}
          <div className='div-imagen'>
            <Link to={`/calendar/${_id}`} >
              <div>

                <img className="img-container" src={imageUrl} alt={username} />
              </div>
              {/* <FontAwesomeIcon icon="user" className="icon-card" /> */}
            </Link>
            <h2>{username}</h2>
            <h2>{lastname}</h2>

          </div>

          {/* div contenido */}
          <div className="div-container">
            {/* div superior */}
            <div className="div-top">
              {/* <Link to={`/calendar/${_id}`} /> */}
              <FontAwesomeIcon icon="user-clock" className="icon-info" />
              {!isWorkingToday ? <p>Day off</p> : stillWorking ? <p>Working</p> : beforeWork ? <p>Work today</p> : <p>Finished</p>}
            </div>
            {/* div medio */}
            <div className="div-mid">
              <FontAwesomeIcon icon="business-time" className="icon-info" />
              {this.state.currentInitHour} - {this.state.currentEndHour}
            </div>
            {/* div inferior */}
            <div className="div-bottom" >
              <a href={`tel:${phone}`}><FontAwesomeIcon icon="phone" className="icon-info" /></a>
              {phone}
            </div>
          </div>
          {/* DIV COLOR */}
          {!isWorkingToday ? <div className="red-box"></div> : stillWorking ? <div className="green-box"></div> : <div className="yellow-box"></div>}
        </li>
      </div>
    );
  }
}

export default EmployeeCard;