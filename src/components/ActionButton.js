'use strict';

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {actionIconSize} from '../constants';

import {
  View,
} from 'react-native';

class ActionButton extends Component {
  render() {
    return (
      <View>
        <Icon.Button style={this.props.styles} onPress={this.props.onClick}
          name={this.props.iconName} size={actionIconSize}
          color={this.props.iconColor}
          backgroundColor={this.props.backgroundColor}/>
      </View>
        );
      }
}

export default ActionButton;
