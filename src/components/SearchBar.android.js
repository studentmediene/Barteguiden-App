'use strict';

var React = require('react');
var ReactNative = require('react-native');

import Icon from 'react-native-vector-icons/Ionicons';
import {iOSBlue} from '../constants';

var {
  Image,
  Platform,
  ProgressBarAndroid,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} = ReactNative;

var IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21;
var SEARCH_BUTTON_SIZE = 30;

var SearchBar = React.createClass({
  render: function() {
    var loadingView;
    if (this.props.isLoading) {
      loadingView = (
        <ProgressBarAndroid
          styleAttr="Large"
          style={styles.spinner}
        />
      );
    } else {
      loadingView = <View style={styles.spinner} />;
    }
    var background = IS_RIPPLE_EFFECT_SUPPORTED ?
      TouchableNativeFeedback.SelectableBackgroundBorderless() :
      TouchableNativeFeedback.SelectableBackground();
    return (
      <View style={styles.searchBar}>
        <TouchableNativeFeedback
            background={background}
            onPress={() => this.refs.input && this.refs.input.focus()}>
          <View>
            <Icon name={'ios-search-strong'} size={SEARCH_BUTTON_SIZE} color={iOSBlue}/>
          </View>
        </TouchableNativeFeedback>
        <TextInput
          ref="input"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          onChangeText={this.props.onChange}
          placeholder="Søk"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          style={styles.searchBarInput}
        />
        {loadingView}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    height: 40,
    borderBottomColor: iOSBlue,
    borderBottomWidth: 3,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    height: 30,
    paddingLeft: 5,
    padding: 0,
    backgroundColor: 'transparent'
  },
  spinner: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

module.exports = SearchBar;
