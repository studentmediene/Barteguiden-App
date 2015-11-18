/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import {formatDate, formatPrice} from './utilities';
import EventDescription from './EventDescription';
import EventDetailsImage from './EventDetailsImage.js';
import {generalBackground} from './constants';

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Component,
  } = React;

class EventDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EventDetailsImage event={this.props.event}/>
        <View style={styles.descriptionContainer}>
          <EventDescription description={this.props.event.description}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  descriptionContainer: {
    backgroundColor: generalBackground,
    flex: 1,
  },
});

export default EventDetails;
