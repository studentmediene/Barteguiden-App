import React from 'react';
import { backgroundColor } from '../colors';

const HTMLView = require('react-native-htmlview');

import {
  StyleSheet,
  View,
} from 'react-native';

function EventDescription(props) {
  return (
    <View style={styles.container}>
      <HTMLView
        value={props.event.description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor,
  },
});

export default EventDescription;
