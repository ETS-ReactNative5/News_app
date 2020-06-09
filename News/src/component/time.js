import React, {Component} from 'react';
import {View , Text, } from 'react-native'
import moment from 'moment'


class Time extends Component {

  constructor(props) {
    super(props);
    this.data = props.time;
  }
  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return(
       <Text  style={{color:'green'}}>{time}</Text>
    )
  }
}
export default Time;