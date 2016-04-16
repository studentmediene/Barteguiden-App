'use strict';

import React from 'react-native'

var Share = require('react-native-share');

const {
  Linking,
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Image,
  } = React;

class MapButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.button}>
          <Image source={require('../img/map_button.png')}/>{/*Placeholder, should have our own icon for this*/}
        </TouchableOpacity>
      </View>
    );
  }

  onClick() {
    var event = this.props.event;
    var url = 'geo:' + event.venue.latitude + ','  + event.venue.longitude;
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
