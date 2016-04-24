/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import {formatDate, formatPrice} from '../utilities';
import EventDescription from './EventDescription';
import EventDetailsImage from './EventDetailsImage';
import {backgroundColor} from '../constants';

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Component,
  ScrollView,
  } = React;

class EventDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EventDetailsImage event={this.props.event}/>
        <ScrollView style={styles.scroll}>
          <View style={styles.descriptionContainer}>
            <EventDescription event={this.props.event}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 50,
  },
  descriptionContainer: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  scroll: {
    backgroundColor: backgroundColor,
  }
});

export default EventDetails;
