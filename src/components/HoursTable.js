import React, { Component } from 'react';
import HourRow from './HourRow'

class HoursTable extends Component {

  state = {
    initHour: this.props.initHour,
    endHour: this.props.endHour,
    dataRows: this.props.dataRows,
    heightHour: 100,
    heightInit: 100,
    heightEnd: 100,
  }

  // componentDidMount() {
  //   console.log("props table", this.props)
  //   //this.setHours()
  //   //this.getDataRows()
  // }

  setHours = () => {
    this.setState({
      initHour: this.props.initHour,
      endHour: this.props.endHour,
    })
    console.log("set hours ", this.state)

  }

  // getHeigth = () => {
  //   const min1 = this.props.initHour.split(':');
  //   const minInit = min1[1];
  //   const min2 = this.props.endHour.split(':');
  //   const minEnd = min2[1];
    
  //   let heightStart = 0;
  //   let heightFinish = 0;

  //   if (minInit !== "00") {

  //     heightStart = 100 - (minInit / 60 * 100);

  //   }
  //   if (minEnd !== "00") {
  //     heightFinish = minInit / 60 * 100;
  //   }

  //   this.setState({
  //     heightInit: heightStart,
  //     heightEnd: heightFinish,
  //   })
  // }

  // getDataRows = () => {
    

  //   // const initHour = "05:25";
  //   // const endHour = "22:12";
  //   const arrayRows = [];
  //   const n1 = parseInt(this.props.initHour)
  //   const n2 = parseInt(this.props.endHour)
  //   console.log("datarows from: ", n1)
  //   console.log("datarows to: ", n2)

  //   for (let i = n1; i <= n2; i++) {

  //     let stringDay = i + ":00"
  //     arrayRows.push(stringDay)
  //   }

  //   this.getHeigth()

  //   this.setState({
  //     dataRows: arrayRows
  //   })
  // }

  renderRows = () => {
    return this.props.dataRows.map((item, index) => {

     
      if (index === 0) {
        console.log('primera hora')
        console.log(this.state.heightInit, index)
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.state.heightInit}
        />

      } else if (index === this.props.dataRows.length - 1) {
        
        console.log("ultima hora")
        console.log(this.state.heightEnd, index)
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.state.heightEnd}
        />
      } else {
        console.log("horas en medio")
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.state.heightHour}
        />
      }
    })

  }

  render() {
    return (
      <div className="center-elements background-color">
        <ul id="employee-schedule" >
          {this.renderRows()}
        </ul>
      </div>

    );
  }
}

export default HoursTable;