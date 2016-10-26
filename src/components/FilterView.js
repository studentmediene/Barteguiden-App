import React from 'react';
import Filter from './Filter.js';

import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';

const FilterView = () => (
  <View style={styles.container}>
    {Platform.OS === 'android' ?
      <ToolbarAndroid
        style={styles.toolbar}
        title='Barteguiden'
      />
    : null}
    <ScrollView style={styles.container}>
      <Filter />
  </View>
);

export default FilterView;
