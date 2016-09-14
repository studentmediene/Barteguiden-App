import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventActions from '../actions/events';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor, favoriteColor, highlightColor } from '../colors';
import { actionIconSize } from '../constants';
import { getPlatformIcon } from '../utilities';
import ActionButton from './ActionButton';
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

const EmptyErrorList = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Noe gikk galt.</Text>
    <View style={styles.helpIcons}>
      <ActionButton
        actionText={'Prøv igjen'}
        backgroundColor={backgroundColor}
        iconName={getPlatformIcon('refresh')}
        iconColor={highlightColor}
        onPress={() => props.actions.fetchEvents()}
      />
    </View>
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
});

export default connect(null, mapDispatchToProps)(EmptyErrorList);
