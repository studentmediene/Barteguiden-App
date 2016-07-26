'use strict';

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  TouchableOpacity,
} from 'react-native';

class ActionButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onClick} style={this.props.styles}>
          <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ActionButton;
