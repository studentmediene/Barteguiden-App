'use strict';

import React from 'react-native'
import moment from 'moment'

var SendIntentAndroid = require('react-native-send-intent');

const {
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Image,
  Platform,
  } = React;

class CalendarButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.button}>
          <Image source={require('../img/categoryDebate.png')}/>{/*Placeholder, should have our own icon for this*/}
        </TouchableOpacity>
      </View>
    );
  }

  onClick() {
    if(Platform.OS === 'android'){
      var dateFormat = 'YYYY-MM-DD HH:mm';
      var event = this.props.event;
      SendIntentAndroid.addCalendarEvent({
        title: event.title,
        description: event.description,
        startDate: moment(event.startAt).format(dateFormat),
        endDate: ('endAt' in event) ? moment(event.endAt).format(dateFormat)
        : moment(event.startAt).add(2, 'h').format(dateFormat),
        recurrence: 'none',
        location: event.venue.name,
      });
    }
  }
}

const styles = StyleSheet.create({
  button: {
  },
});

export default CalendarButton;
