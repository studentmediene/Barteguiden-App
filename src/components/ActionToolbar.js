import React, { Component } from 'react';
import moment from 'moment';
import ActionButton from './ActionButton';
import FavoriteButton from './FavoriteButton';
import RNCalendarEvents from 'react-native-calendar-events';
import { getPlatformIcon } from '../utilities';
import { highlightColor, containerColor, separatorColor } from '../colors';

const Share = require('react-native-share');
const SendIntentAndroid = Platform.OS === 'android' ?
require('react-native-send-intent') : null;

import {
  StyleSheet,
  View,
  Platform,
  Alert,
  NativeAppEventEmitter,
} from 'react-native';

class ActionToolbar extends Component {
  static addCalendarListeners() {
    this.eventEmitter = NativeAppEventEmitter.addListener('eventSaveSuccess', () => {
      Alert.alert(
        'Hendelsen ble lagt til i kalenderen',
        '',
        [
          { text: 'OK' },
        ]
      );
    });

    this.eventEmitter = NativeAppEventEmitter.addListener('eventSaveError', () => {
      Alert.alert(
        'Noe gikk galt',
        '',
        [
          { text: 'OK' },
        ]
      );
    });
  }

  static removeCalendarListeners() {
    this.eventEmitter.remove();
  }

  onCalendarPress = () => {
    if (Platform.OS === 'android') {
      this._addCalendarEventAndroid();
    } else {
      this._addCalendarEventIOS();
    }
  }

  onSharePress = () => {
    const event = this.props.event;
    Share.open({
      message: event.title,
      url: 'https://barteguiden.no/arrangement/${event._id}',
      title: 'Del arrangement',
    });
  }

  _addCalendarEventAndroid() {
    const dateFormat = 'YYYY-MM-DD HH:mm';
    const event = this.props.event;
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
    RNCalendarEvents.authorizeEventStore(() => {
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
    });
  }

  render() {
    const backgroundIconButtonColor = containerColor;
    const iconColor = highlightColor;
    return (
      <View style={styles.toolbar}>
        <ActionButton
          actionText={'Legg til i kalender'}
          backgroundColor={backgroundIconButtonColor}
          iconName={getPlatformIcon('calendar')}
          iconColor={iconColor}
          onPress={this.onCalendarPress}
        />
        <ActionButton
          actionText={'Del'}
          backgroundColor={backgroundIconButtonColor}
          iconName={getPlatformIcon('share')}
          iconColor={iconColor}
          onPress={this.onSharePress}
        />
        <FavoriteButton event={this.props.event} />
      </View>
    );
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
