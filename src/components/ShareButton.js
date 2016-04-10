'use strict';

import React from 'react-native'

var Share = require('react-native-share');

const {
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Image,
  Platform,
  } = React;

class ShareButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.button}>
          <Image source={require('../img/categoryNightlife.png')}/>{/*Placeholder, should have our own icon for this*/}
        </TouchableOpacity>
      </View>
    );
  }

  onClick() {
    var event = this.props.event;
    Share.open({
      share_text: event.title,
      share_URL: "http://barteguiden.no/arrangement/" + event._id,
      title: "Del arrangement"
    },function(e) {
      console.log(e);
    });
  }
}

const styles = StyleSheet.create({
  button: {
  },
});

export default ShareButton;
