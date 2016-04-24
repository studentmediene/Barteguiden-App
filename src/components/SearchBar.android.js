'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import {iOSBlue, searchButtonSize} from '../constants';

import React, {
  Image,
  Platform,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Component,
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
            onPress={() => this.refs.input && this.refs.input.focus()}>
          <View>
            <Icon name={'ios-search-strong'} size={searchButtonSize} color={iOSBlue}/>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

export default SearchBar;
