'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import ActionButton from './ActionButton';
import FavoriteButton from './FavoriteButton';
import RNCalendarEvents from 'react-native-calendar-events';
import { getPlatformIcon } from '../utilities';
import { highlightColor, containerColor, separatorColor } from '../colors';

var SendIntentAndroid = Platform.OS === 'android' ?
require('react-native-send-intent') : null;
var Share = require('react-native-share');

import {
  StyleSheet,
  View,
  Platform,
  Alert,
  NativeAppEventEmitter,
} from 'react-native';

class ActionToolbar extends Component {
  render() {
    const backgroundIconButtonColor = containerColor;
    const iconColor = highlightColor;
    return (
      <View style={styles.toolbar}>
        <ActionButton actionText="Legg til i kalender"
          backgroundColor={backgroundIconButtonColor}
          iconName={getPlatformIcon('calendar')}
          iconColor={iconColor}
          onPress={this.onCalendarPress.bind(this)}
        />
        <ActionButton actionText="Del"
          backgroundColor={backgroundIconButtonColor}
          iconName={getPlatformIcon('share')}
          iconColor={iconColor}
          onPress={this.onSharePress.bind(this)}
        />
        <FavoriteButton event={this.props.event} />
      </View>
    );
  }

  onCalendarPress() {
    if (Platform.OS === 'android') {
      this._addCalendarEventAndroid();
    }
    else {
      this._addCalendarEventIOS();
    }
  }

  _addCalendarEventAndroid() {
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

  _addCalendarEventIOS() {
    RNCalendarEvents.authorizeEventStore(({ status }) => {
      // Authorize
    });

    // Set end date to two hours ahead if not specified
    let endDate = this.props.event.endAt;
    if (!endDate) {
      endDate = moment(this.props.event.startAt).add(2, 'hours');
    }

    RNCalendarEvents.saveEvent(this.props.event.title, {
      location: this.props.event.venue.name,
      notes: this.props.event.description,
      startDate: this.props.event.startAt,
      endDate,
    });
  }

  componentWillMount() {
    this.eventEmitter = NativeAppEventEmitter.addListener('eventSaveSuccess', (id) => {
      Alert.alert(
        'Hendelsen ble lagt til i kalenderen',
        '',
        [
          { text: 'OK' },
        ]
      );
    });

    this.eventEmitter = NativeAppEventEmitter.addListener('eventSaveError', (id) => {
      Alert.alert(
        'Noe gikk galt',
        '',
        [
          { text: 'OK' },
        ]
      );
    });
  }

  onSharePress() {
    var event = this.props.event;
    Share.open({
      message: event.title,
      url: 'https://barteguiden.no/arrangement/' + event._id,
      title: 'Del arrangement',
    }, function (e) {
      console.log(e);
    });
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: containerColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: separatorColor,
  },
});

export default ActionToolbar;
