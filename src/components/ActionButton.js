'use strict';

import React from 'react-native'

const {
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Image,
  } = React;

class ActionButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onClick} style={this.props.styles}>
          <Image source={this.props.imageSource}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ActionButton;

