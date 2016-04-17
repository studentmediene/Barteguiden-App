'use strict';

import React from 'react-native'
import ActionButton from './ActionButton';


const {
  Linking,
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Image,
  Platform,
  } = React;

class MapButton extends Component {
  render() {
    return (
      <View>
       <ActionButton onClick={this.onClick.bind(this)} imageSource={require('../img/map_button.png')} styles={styles.button} />
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
