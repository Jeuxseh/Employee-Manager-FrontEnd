import React, { Component } from 'react';


class CreateEmployeeDataForm extends Component {

  state = {
    username: '',
    dni: '',
    password: '',
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

  // onClick = (event) => {
  //   if (this.isEmpty(this.state[event.target.name])) {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //       // schedule: {
  //       //   [event.target.name]: {
  //       //     isClicked: true,
  //       //   }
  //       // }
  //     })

  //   } else {
  //     this.setState({
  //       [event.target.name]: {},
  //       // schedule: {
  //       //   [event.target.name]: {
  //       //     isClicked: false,
  //       //   }
  //       // },
  //     })

  //   }

  // }
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
      })
    }
  }



  // renderTime = (day) => {
  //   return <>
  //     From: <input type="time" onChange={this.handleChangeTime} name={`${day}.initHour`} value={day.initHour}></input>
  //     to: <input type="time" onChange={this.handleChangeTime} name={`${day}.endHour`} value={day.endHour}></input>
  //   </>
  // }


  // -----------
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: '',
      dni: '',
      password: '',
      phone: '',
      address: '',
      email: '',
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
    })
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text" />
          <input placeholder="dni..." onChange={this.handleChange} value={this.state.dni} name="dni" type="text" />
          <input placeholder="password..." onChange={this.handleChange} value={this.state.password} name="password" type="text" />
          <input placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number" />
          <input placeholder="address..." onChange={this.handleChange} value={this.state.address} name="address" type="text" />
          <input placeholder="email..." onChange={this.handleChange} value={this.state.email} name="email" type="email" />
          <fieldset>
            <legend>Schedule</legend>
            <input onClick={this.onClickMonday} type="checkbox" name="monday" value="monday" /><label>Monday </label>
            {this.state.mondayIsClicked &&
              <>
                From:  <input type="time" onChange={this.handleChangeTime} name="monday.initHour" value={monday.initHour}></input>
                to:  <input type="time" onChange={this.handleChangeTime} name="monday.endHour" value={monday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickTuesday} type="checkbox" name="tuesday" value="tuesday" /><label>Tuesday </label>
            {this.state.tuesdayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="tuesday.initHour" value={tuesday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="tuesday.endHour" value={tuesday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickWednesday} type="checkbox" name="wednesday" value="wednesday" /><label>Wednesday </label>
            {this.state.wednesdayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="wednesday.initHour" value={wednesday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="wednesday.endHour" value={wednesday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickThursday} type="checkbox" name="thursday" value="thursday" /><label>Thursday </label>
            {this.state.thursdayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="thursday.initHour" value={thursday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="thursday.endHour" value={thursday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickFriday} type="checkbox" name="friday" value="friday" /><label>Friday </label>
            {this.state.fridayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="friday.initHour" value={friday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="friday.endHour" value={friday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickSaturday} type="checkbox" name="saturday" value="saturday" /><label>Saturday </label>
            {this.state.saturdayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="saturday.initHour" value={saturday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="saturday.endHour" value={saturday.endHour}></input>
              </>
            }
            <br />
            <br />
            <input onClick={this.onClickSunday} type="checkbox" name="sunday" value="sunday" /><label>Sunday </label>
            {this.state.sundayIsClicked &&
              <>
                From: <input type="time" onChange={this.handleChangeTime} name="sunday.initHour" value={sunday.initHour}></input>
                to: <input type="time" onChange={this.handleChangeTime} name="sunday.endHour" value={sunday.endHour}></input>
              </>
            }
            <br />
            <br />
          </fieldset>
          <button type="submit">Create Employee</button>
        </form>
      </div>
    );
  }
}

export default CreateEmployeeDataForm;