/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import SafariView from 'react-native-safari-view'

const {
  StyleSheet,
  Text,
  Component,
  TouchableOpacity,
  Platform,
  Linking,
  } = React;

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
    color: "#0E7AFE",
    marginTop: 20,
  }
});

export default ExternalLink;
