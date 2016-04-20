'use strict';

import React from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {
  View,
  Component,
  TouchableOpacity,
  } = React;

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

