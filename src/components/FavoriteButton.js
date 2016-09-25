import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as favoriteActions from '../actions/favorites';
import ActionButton from './ActionButton';
import { favoriteColor, containerColor } from '../colors';
import PushNotification from 'react-native-push-notification';
import { getPlatformIcon, getNotificationForEvent } from '../utilities';

import {
  View,
} from 'react-native';

class FavoriteButton extends Component {
  onPress = () => {
    const notification = getNotificationForEvent(this.props.event);
    if (this.props.shouldScheduleNotifications) {
      if (!this.props.event.isFavorite) {
        PushNotification.localNotificationSchedule(notification);
        this.props.actions.addScheduledNotification(notification);
      } else {
        PushNotification.cancelLocalNotifications({
          id: notification.id,
        });
        this.props.actions.removeScheduledNotification(notification);
      }
    }
    this.props.actions.toggleFavoriteEvent(this.props.event);
  };

  _getFavoriteIcon() {
    if (this.props.event.isFavorite) {
      return getPlatformIcon('favoriteOn');
    }
    return getPlatformIcon('favoriteOff');
  }

  render() {
    return (
      <View>
        <ActionButton
          onPress={this.onPress}
          iconName={this._getFavoriteIcon()}
          iconColor={favoriteColor}
          backgroundColor={containerColor}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(favoriteActions, dispatch),
});

const mapStateToProps = state => ({
  shouldScheduleNotifications: state.events.settings.notifyBeforeFavoriteStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
