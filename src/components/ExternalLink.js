'use strict';

import React, {Component} from 'react';
import SafariView from 'react-native-safari-view'
import {highlightColor} from '../colors';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';

class ExternalLink extends Component {
  render() {
    if(this.props.url) {
      return (
        <TouchableOpacity onPress={this._openInBrowser.bind(this)}>
          <Text style={styles.externalLink}>{this.props.linkText}</Text>
        </TouchableOpacity>
      )
    }
    return null;
  }

  _openInBrowser() {
    if(Platform.OS === 'ios') {
      this._openIOS();
    }
    else {
      this._openAndroid();
    }
  }

  _openIOS() {
    SafariView.show({
      url: this.props.url
    })
  }

  _openAndroid() {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Can\'t open URI: ' + this.props.url);
      }
    });
  }
}

const styles = StyleSheet.create({
  externalLink: {
    fontSize: 18,
    color: highlightColor,
  }
});

export default ExternalLink;
