import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import _ from 'lodash';

import ActionCheckBox from './ActionCheckBox';
import * as favoriteActions from '../actions/favorites';
import { containerColor, separatorColor, highlightColor } from '../colors';
import { getPlatformIcon, getNotificationForEvent } from '../utilities';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

class AboutPane extends Component {
  constructor(props) {
    super(props);
    PushNotification.configure({
      onNotification: (notification) => {
        this.props.actions.removeScheduledNotification(notification);
      },
      requestPermissions: false,
    });
  }

  handle = () => {
    Alert.alert(
      'Fjern alle favoritter',
      'Sikker?',
      [
        { text: 'Avbryt', style: 'cancel' },
        { text: 'Slett',
          onPress: () => this.props.actions.clearFavoriteEvents(),
          style: 'destructive' },
      ]
    );
  }

  _requestNotificationPermissions = () => {
    PushNotification.checkPermissions((permissions) => {
      if (!permissions.alert) {
        PushNotification.requestPermissions();
      }
    });
  }

  _onCheck() {
    if (!this.props.checkBoxStatus) {
      this._requestNotificationPermissions();
      for (let i = 0; i < this.props.favoriteEvents.length; i += 1) {
        const evid = this.props.favoriteEvents[i];
        const a = _.findIndex(this.props.allEvents, event =>
           event._id === evid
        );
        if (a !== -1 && this.props.allEvents[a].startAt > Date.now()) {
          const notification = getNotificationForEvent(this.props.allEvents[a]);
          PushNotification.localNotificationSchedule(notification);
          this.props.actions.addScheduledNotification(notification);
        }
      }
    } else {
      for (let i = 0; i < this.props.scheduledNotifications.length; i += 1) {
        if (this.props.scheduledNotifications[i].id !== undefined) {
          PushNotification.cancelLocalNotifications({
            id: this.props.scheduledNotifications[i].id,
          });
        }
      }
      this.props.actions.clearScheduledNotifications();
    }
    this.props.actions.setNotifyBeforeFavoriteStart(!this.props.checkBoxStatus);
  }

  render() {
    return (
      <View>
        <Text style={styles.h1}>Innstillinger</Text>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handle}
            style={styles.setting}
          >
            <Text style={styles.settingText}>Fjern alle favoritter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ActionCheckBox
            actionText='Si ifra før et favorittarrangement starter'
            checked={this.props.checkBoxStatus}
            onChange={() => this._onCheck()}
            checkedImage={getPlatformIcon('checkedBox')}
            iconColor={highlightColor}
            backgroundColor={containerColor}
            uncheckedImage={getPlatformIcon('uncheckedBox')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: containerColor,
    borderColor: separatorColor,
    borderWidth: StyleSheet.hairlineWidth,
  },
  h1: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  setting: {
    padding: 13,
  },
  settingText: {
    fontSize: 16,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(favoriteActions, dispatch),
});

const mapStateToProps = state => ({
  checkBoxStatus: state.events.settings.notifyBeforeFavoriteStart,
  scheduledNotifications: state.events.scheduledNotifications,
  favoriteEvents: state.events.favoriteEvents,
  allEvents: state.events.allEvents,
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPane);
