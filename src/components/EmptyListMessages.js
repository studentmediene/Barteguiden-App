import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor, favoriteColor } from '../colors';
import { actionIconSize } from '../constants';
import { getPlatformIcon } from '../utilities';
import Icon from 'react-native-vector-icons/Ionicons';

export const EmptyFavoriteList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Denne listen er tom. Marker et arrangement som favoritt for å se det her.
    </Text>
    <View style={styles.helpIcons}>
      <Icon
        name={getPlatformIcon('favoriteOff')} size={actionIconSize} color={favoriteColor}
      />
      <Icon
        name='ios-arrow-round-forward' size={actionIconSize} style={styles.arrow}
      />
      <Icon
        name={getPlatformIcon('favoriteOn')} size={actionIconSize} color={favoriteColor}
      />
    </View>
  </View>
);

export const EmptyEventList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Ingen arrangementer å vise.</Text>
  </View>
);

const styles = StyleSheet.create({
  arrow: {
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor,
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
  helpIcons: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
