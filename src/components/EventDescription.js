/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import CalendarButton from './CalendarButton'
import ExternalLink from './ExternalLink';
import ShareButton from './ShareButton';
import MapButton from './MapButton';
import {highlightColor, containerColor} from '../colors';

var HTMLView = require('react-native-htmlview')

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class EventDescription extends Component {
  render() {
    return (
      <View style={styles.container}>

        <HTMLView
          value={this.props.event.description}
        />
        <View style={styles.descriptionHeaderAndIcon}>
          <ExternalLink url={this.props.event.eventUrl} linkText={'Link til arrangementet'}/>
          <CalendarButton event={this.props.event} color={highlightColor}/>
          <ShareButton event={this.props.event} color={highlightColor}/>
          <MapButton event={this.props.event} color={highlightColor}/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: containerColor,
  },
  descriptionHeader: {
    fontSize: 18,
    paddingBottom: 5,
  },
  descriptionHeaderAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },
});

export default EventDescription;
