/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import {backgroundColor} from '../colors';

var HTMLView = require('react-native-htmlview')

import {
  StyleSheet,
  View,
} from 'react-native';

class EventDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HTMLView
          value={this.props.event.description}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: backgroundColor,
  }
});

export default EventDescription;
