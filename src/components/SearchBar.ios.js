'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import {highlightColor, backgroundColor, containerColor} from '../colors';

import React, {
  TextInput,
  StyleSheet,
  View,
  Component,
} from 'react-native';


class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <Icon name={'ios-search-strong'} size={25} color={'white'}/>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.props.onChange}
          placeholder="Søk"
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  searchBar: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: highlightColor,
    backgroundColor: backgroundColor,
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
    textAlign: 'center',
    borderRadius: 7,
    backgroundColor: containerColor,
    marginLeft: 5,
  },
});

export default SearchBar;
