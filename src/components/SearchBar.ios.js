import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { highlightColor, backgroundColor, containerColor } from '../colors';
import { normalize } from '../utilities';

import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';


const SearchBar = (props) => (
  (
  <View
    style={styles.searchBar}
  >
    <Icon name={'ios-search'} size={25} color={'white'} />
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={props.onChange}
      placeholder='Søk'
      onFocus={props.onFocus}
      style={styles.searchBarInput}
    />
  </View>
  )
);

const styles = StyleSheet.create({
  searchBar: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: highlightColor,
    backgroundColor,
  },
  searchBarInput: {
    fontSize: normalize(15),
    flex: 1,
    height: 30,
    textAlign: 'center',
    borderRadius: 7,
    backgroundColor: containerColor,
    marginLeft: 5,
  },
});

export default SearchBar;
