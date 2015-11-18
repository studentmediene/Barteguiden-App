/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'

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
        <Text style={styles.descriptionHeader}>Beskrivelse</Text>
        <Text>{this.props.description}</Text>
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
});

export default EventDescription;
