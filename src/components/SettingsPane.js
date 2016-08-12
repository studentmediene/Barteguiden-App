import React, { Component } from 'react';
import { highlightColor, containerColor } from '../colors';

import {
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';

class AboutPane extends Component {
  _openLink(url) {
    Linking.openURL(url);
  }

  render() {
    return (
      <View>
        <Text style={styles.h1}>Innstillinger</Text>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Settings here
          </Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: containerColor,
  },
  h1: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  link: {
    color: highlightColor,
  },
  paragraph: {
    marginBottom: 10,
  },
});

export default AboutPane;
