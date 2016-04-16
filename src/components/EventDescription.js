/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import CalendarButton from './CalendarButton'
import ExternalLink from './ExternalLink';
import ShareButton from './ShareButton'

var HTMLView = require('react-native-htmlview')

const {
  StyleSheet,
  Text,
  View,
  Component,
  } = React;

class EventDescription extends Component {
  render() {
    return (
      <View style={styles.container}>

        <HTMLView
          value={this.props.event.description}
        />
        <View style={styles.descriptionHeaderAndIcon}>
          <ExternalLink url={this.props.event.eventUrl} linkText={'Link til arrangementet'}/>
          <CalendarButton event={this.props.event}/>
          <ShareButton event={this.props.event}/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
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
