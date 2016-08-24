import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as favoriteActions from '../actions/favorites';

import { containerColor, separatorColor } from '../colors';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

class AboutPane extends Component {
  handle = () => {
    Alert.alert(
      'Fjern alle favoritter',
      'Sikker?',
      [
        { text: 'Avbryt', style: 'cancel' },
        { text: 'Slett',
          onPress: () => this.props.actions.clearFavoriteEvents(),
          style: 'destructive' },
      ]
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.h1}>Innstillinger</Text>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handle}
            style={styles.setting}
          >
            <Text style={styles.settingText}>Fjern alle favoritter</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: containerColor,
    borderColor: separatorColor,
    borderWidth: StyleSheet.hairlineWidth,
  },
  h1: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  setting: {
    padding: 13,
  },
  settingText: {
    fontSize: 16,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(favoriteActions, dispatch),
});

export default connect(null, mapDispatchToProps)(AboutPane);
