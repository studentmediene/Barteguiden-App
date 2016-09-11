import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { searchButtonSize } from '../constants';
import { highlightColor, containerColor } from '../colors';
import { normalize } from '../utilities';

import {
  Platform,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21;

class SearchBar extends Component {
  render() {
    const background = IS_RIPPLE_EFFECT_SUPPORTED ?
    TouchableNativeFeedback.SelectableBackgroundBorderless() :
    TouchableNativeFeedback.SelectableBackground();

    return (
      <View style={styles.searchBar}>
        <TouchableNativeFeedback
          background={background}
          onPress={() => this._input && this._input.focus()}
        >
          <View>
            <Icon name={'ios-search'} size={searchButtonSize} color={highlightColor} />
          </View>
        </TouchableNativeFeedback>
        <TextInput
          ref={(input) => (this._input = input)}
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={false}
          onChangeText={this.props.onChange}
          placeholder='Søk'
          placeholderTextColor='rgba(0, 0, 0, 0.5)'
          style={styles.searchBarInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: containerColor,
    paddingLeft: 10,
    height: 40,
    borderBottomColor: highlightColor,
    borderBottomWidth: 3,
  },
  searchBarInput: {
    flex: 1,
    fontSize: normalize(16),
    color: 'black',
    height: 30,
    paddingLeft: 5,
    padding: 0,
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

export default SearchBar;
