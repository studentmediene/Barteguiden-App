'use strict';

import React, {Component} from 'react';
import ActionButton from './ActionButton';
import {actionIconSize} from '../constants';
import {getPlatformIcon} from '../utilities';

import {
  Linking,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

class MapButton extends Component {
  render() {
    return (
      <View>
       <ActionButton onClick={this.onClick.bind(this)} iconName={getPlatformIcon('map')}
                     iconSize={actionIconSize} styles={styles.button} iconColor={this.props.color}/>
      </View>
    );
  }

  onClick() {
    let {latitude, longitude, name} = this.props.event.venue;
    let url;

    if (Platform.OS === 'android') {
      url = 'geo:' + latitude + ','  + longitude;
    }
    else {
      url = `http://maps.apple.com/?q=${name.split(' ').join('+')}&sll=${latitude},${longitude}&z=10`
    }

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
}

const styles = StyleSheet.create({
  button: {
  },
});

export default MapButton;
