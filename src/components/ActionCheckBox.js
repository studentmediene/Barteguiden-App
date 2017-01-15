import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { checkboxSize } from '../constants';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

function ActionCheckBox(props) {
  return (
    <View style={styles.container}>
      <Icon.Button
        name={props.checked ? props.checkedImage : props.uncheckedImage}
        style={styles.checkbox}
        size={checkboxSize}
        color={props.iconColor}
        backgroundColor={props.backgroundColor}
        onPress={props.onChange}
      />
      <Text style={styles.text}> {props.actionText} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    flex: 5,
  },
  checkbox: {
    width: checkboxSize + 5,
    height: checkboxSize + 5,
  },
});

export default ActionCheckBox;
