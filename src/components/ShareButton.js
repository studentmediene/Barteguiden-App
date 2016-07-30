'use strict';

import React, {Component} from 'react';
import ActionButton from './ActionButton';
import {getPlatformIcon} from '../utilities';

var Share = require('react-native-share');

import {
  StyleSheet,
  View,
} from 'react-native';

class ShareButton extends Component {
  render() {
    return (
      <View>
        <ActionButton onClick={this.onClick.bind(this)}
          iconName={getPlatformIcon('share')}
          styles={styles.button}
          iconColor={this.props.color} backgroundColor={this.props.backgroundColor}/>
      </View>
    );
  }

  onClick() {
    var event = this.props.event;
    Share.open({
      message: event.title,
      url: "http://barteguiden.no/arrangement/" + event._id,
      title: "Del arrangement"
    },function(e) {
      console.log(e);
    });
  }
}

const styles = StyleSheet.create({
  button: {
  },
});

export default ShareButton;
