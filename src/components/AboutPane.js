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
        <Text style={styles.h1}>Om Barteguiden</Text>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Studentmediene i Trondheim AS organiserer studentmediene Under Dusken,
            <Text style={styles.link} onPress={() => this._openLink('http://dusken.no')}>
              &thinsp;Dusken.no
            </Text>,
            Radio Revolt, Student-TV, samt tjenestene
            <Text style={styles.link} onPress={() => this._openLink('http://ibok.no')}>
              &thinsp;iBok.no
            </Text>
            &thinsp;og Barteguiden.
          </Text>
          <Text style={styles.paragraph}>
            Våre medier har som mål å fokusere på studentene i Trondheims ve og vel –
            både faglig og sosialt – ved å gi disse riktig og viktig informasjon om
            studielivet. De skal også dekke andre hendelser av interesse innen
            utdannings- og forskningsmiljøene i Norge.
          </Text>
          <Text style={styles.paragraph}>
            Kontakt oss på:&thinsp;
            <Text
              style={styles.link} onPress={() =>
              this._openLink('mailto:barteguiden@studentmediene.no')}
            >
              barteguiden@studentmediene.no
            </Text>
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
