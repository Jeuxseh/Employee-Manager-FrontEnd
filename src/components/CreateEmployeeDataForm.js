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
    monday: {
      initHour: '',
      endHour: ''
    },
    tuesday: {
      initHour: '',
      endHour: ''
    },
    wednesday: {
      initHour: '',
      endHour: ''
    },
    thursday: {
      initHour: '',
      endHour: ''
    },
    friday: {
      initHour: '',
      endHour: ''
    },
    saturday: {
      initHour: '',
      endHour: ''
    },
    sunday: {
      initHour: '',
      endHour: ''
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

  onClick = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
      })
    } else {
      this.setState({
        [event.target.name]: {},
      })
    }
  }
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
      monday: {
        initHour: '',
        endHour: ''
      },
      tuesday: {
        initHour: '',
        endHour: ''
      },
      wednesday: {
        initHour: '',
        endHour: ''
      },
      thursday: {
        initHour: '',
        endHour: ''
      },
      friday: {
        initHour: '',
        endHour: ''
      },
      saturday: {
        initHour: '',
        endHour: ''
      },
      sunday: {
        initHour: '',
        endHour: ''
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })

   
  }

  handleChangeTime = (event) => {
    const day = event.target.name.substring(0,event.target.name.indexOf('.'))
    const hour = event.target.name.substring(event.target.name.indexOf('.')+1,event.target.name.length)

    if (hour ==='initHour') {
      const endHour = this.state[day].endHour;
      this.setState({
        [day]: {
          [hour]: event.target.value,
          endHour,
        },
      })
    } else {
      const initHour = this.state[day].initHour;
      this.setState({
        [day]: {
          [hour]: event.target.value,
          initHour,
        },
      })
    }

   
  }

  render() {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state;
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
            <input onClick={this.onClick} type="checkbox" name="monday" value="monday" /><label>Monday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="monday.initHour" value={monday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="monday.endHour" value={monday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="tuesday" value="tuesday" /><label>Tuesday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="tuesday.initHour" value={tuesday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="tuesday.endHour" value={tuesday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="wednesday" value="wednesday" /><label>Wednesday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="wednesday.initHour" value={wednesday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="wednesday.endHour" value={wednesday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="thursday" value="thursday" /><label>Thursday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="thursday.initHour" value={thursday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="thursday.endHour" value={thursday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="friday" value="friday" /><label>Friday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="friday.initHour" value={friday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="friday.endHour" value={friday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="saturday" value="saturday" /><label>Saturday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="saturday.initHour" value={saturday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="saturday.endHour" value={saturday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="sunday" value="sunday" /><label>Sunday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="sunday.initHour" value={sunday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="sunday.endHour" value={sunday.endHour}></input>
            <br />
          </fieldset>
          <button type="submit">Create Employee</button>
        </form>
      </div>
    );
  }
}

export default CreateEmployeeDataForm;