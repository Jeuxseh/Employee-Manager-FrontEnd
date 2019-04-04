import React, { Component } from 'react';
import '../stylesheets/employee-data.css'


class CreateEmployeeDataForm extends Component {

  state = {
    username: '',
    lastname: '',
    dni: '',
    phone: '',
    address: '',
    email: '',
    //week
    mondayIsClicked: false,
    tuesdayIsClicked: false,
    wednesdayIsClicked: false,
    thursdayIsClicked: false,
    fridayIsClicked: false,
    saturdayIsClicked: false,
    sundayIsClicked: false,
    schedule: {
      monday: {
        initHour: '',
        endHour: '',
      },
      tuesday: {
        initHour: '',
        endHour: '',
      },
      wednesday: {
        initHour: '',
        endHour: '',
      },
      thursday: {
        initHour: '',
        endHour: '',
      },
      friday: {
        initHour: '',
        endHour: '',
      },
      saturday: {
        initHour: '',
        endHour: '',
      },
      sunday: {
        initHour: '',
        endHour: '',
      }
    }
  }
  //checkbox
  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  onClickMonday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        mondayIsClicked: true,
        
      })
    } else {
      this.setState({
        [event.target.name]: {},
        mondayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          monday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }

  onClickTuesday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        tuesdayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        tuesdayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          tuesday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }

  onClickWednesday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        wednesdayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        wednesdayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          wednesday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }
  onClickThursday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        thursdayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        thursdayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          thursday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }
  onClickFriday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        fridayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        fridayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          friday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }
  onClickSaturday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        saturdayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        saturdayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          saturday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }
  onClickSunday = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
        sundayIsClicked: true,
      })
    } else {
      this.setState({
        [event.target.name]: {},
        sundayIsClicked: false,
        schedule: {
          ...this.state.schedule,
          sunday: {
            initHour: '',
            endHour: ''
          },
        } 
      })
    }
  }

  // -----------


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleChangeTime = (event) => {
    const day = event.target.name.substring(0, event.target.name.indexOf('.'))
    const hour = event.target.name.substring(event.target.name.indexOf('.') + 1, event.target.name.length)
    const value = event.target.value;
    this.setState((previousState) => {
      const newState = previousState;
      newState.schedule[day][hour] = value;
      return newState;
    })
  }

  render() {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state.schedule;
    return (
      <div className="container-employee-form ">
        <form onSubmit={this.handleSubmit} className="employee-form">
          <div className="title-row">
            <h2 className='employee-h2'>Create <br/> Employee</h2>
            <button className="create-button" type="submit">Create</button>
          </div>
            <input className="input-employee" placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text" />
            <input className="input-employee" placeholder="Lastname..." onChange={this.handleChange} value={this.state.lastname} name="lastname" type="text" />            <input className="input-employee" placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number" />
            <input className="input-employee" placeholder="Dni..." onChange={this.handleChange} value={this.state.dni} name="dni" type="text" />
            <input className="input-employee" placeholder="Address..." onChange={this.handleChange} value={this.state.address} name="address" type="text" />
            <input className="input-employee" placeholder="Email..." onChange={this.handleChange} value={this.state.email} name="email" type="email" />
          <div className="schedule-container">
            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickMonday} type="checkbox" name="monday" value="monday" /><label className="day-label">Mon</label>
              </div>
              <div className="hour">
                {this.state.mondayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="monday.initHour" value={monday.initHour}></input>
                    to:  <input className="input-time" type="time" onChange={this.handleChangeTime} name="monday.endHour" value={monday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />


            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickTuesday} type="checkbox" name="tuesday" value="tuesday" /><label className="day-label">Tue </label>
              </div>
              <div className="hour">
                {this.state.tuesdayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="tuesday.initHour" value={tuesday.initHour}></input>
                    to: <input className="input-time" type="time" onChange={this.handleChangeTime} name="tuesday.endHour" value={tuesday.endHour}></input>
                  </>
                }
              </div>
            </div>

            <br />
            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickWednesday} type="checkbox" name="wednesday" value="wednesday" /><label className="day-label">Wed </label>
              </div>
              <div className="hour">
                {this.state.wednesdayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="wednesday.initHour" value={wednesday.initHour}></input>
                    to: <input className="input-time" type="time" onChange={this.handleChangeTime} name="wednesday.endHour" value={wednesday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />

            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickThursday} type="checkbox" name="thursday" value="thursday" /><label className="day-label">Thu </label>
              </div>
              <div className="hour">
                {this.state.thursdayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="thursday.initHour" value={thursday.initHour}></input>
                    to: <input className="input-time" type="time" onChange={this.handleChangeTime} name="thursday.endHour" value={thursday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />

            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickFriday} type="checkbox" name="friday" value="friday" /><label className="day-label">Fri </label>
              </div>
              <div className="hour">
                {this.state.fridayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="friday.initHour" value={friday.initHour}></input>
                    to: <input className="input-time" type="time" onChange={this.handleChangeTime} name="friday.endHour" value={friday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />

            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickSaturday} type="checkbox" name="saturday" value="saturday" /><label className="day-label">Sat </label>
              </div>
              <div className="hour">
                {this.state.saturdayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="saturday.initHour" value={saturday.initHour}></input>
                    to: <input className="input-time" type="time" onChange={this.handleChangeTime} name="saturday.endHour" value={saturday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />

            <div className="day-hour">
              <div>
                <input className="input-checkbox" onClick={this.onClickSunday} type="checkbox" name="sunday" value="sunday" /><label className="day-label">Sun </label>
              </div>
              <div className="hour">
                {this.state.sundayIsClicked &&
                  <>
                    <input className="input-time" type="time" onChange={this.handleChangeTime} name="sunday.initHour" value={sunday.initHour}></input>
                    <p>to:</p> <input className="input-time" type="time" onChange={this.handleChangeTime} name="sunday.endHour" value={sunday.endHour}></input>
                  </>
                }
              </div>
            </div>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEmployeeDataForm;