import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { actionIconSize } from '../constants';

import {
  View,
} from 'react-native';

function ActionButton(props) {
  return (
    <View>
      <Icon.Button
        style={props.styles} onPress={props.onPress}
        name={props.iconName} size={actionIconSize}
        color={props.iconColor}
        backgroundColor={props.backgroundColor}
      >
        {props.actionText}
      </Icon.Button>
    </View>
      );
}

export default ActionButton;
