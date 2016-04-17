'use strict';

var React = require('react');
var ReactNative = require('react-native');

import {iOSBlue} from '../constants';

var {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View,
} = ReactNative;

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.props.onChange}
          placeholder="Søk"
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
        <ActivityIndicatorIOS
          animating={this.props.isLoading}
          style={styles.spinner}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  searchBar: {
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: iOSBlue,
    borderBottomWidth: 3,
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
  spinner: {
    width: 30,
  },
});

module.exports = SearchBar;
