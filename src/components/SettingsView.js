import React from 'react';
import AboutPane from './AboutPane';
import SettingsPane from './SettingsPane';
import { backgroundColor, topColor } from '../colors';

import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';


const SettingsView = () => (
  <View style={styles.container}>
    <ScrollView style={styles.container}>
      <SettingsPane />
      <AboutPane />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1,
  },
  toolbar: {
    backgroundColor: topColor,
    height: 56,
  },
});

export default SettingsView;
