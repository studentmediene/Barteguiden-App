import React, { Component } from 'react';
import SafariView from 'react-native-safari-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { separatorColor as iconColor } from '../colors';

import {
  Text,
  TouchableOpacity,
  View,
  Platform,
  Linking,
  StyleSheet,
} from 'react-native';

class ExternalLink extends Component {
  constructor() {
    super();
    this._openInBrowser = this._openInBrowser.bind(this);
  }
  _openInBrowser() {
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: this.props.url,
      });
    } else {
      Linking.canOpenURL(this.props.url).then((supported) => {
        if (supported) {
          Linking.openURL(this.props.url);
        }
      });
    }
  }

  render() {
    if (this.props.url || this.props.onPress) {
      return (
        <TouchableOpacity
          style={this.props.containerStyle}
          onPress={this.props.onPress ? this.props.onPress
          : this._openInBrowser}
        >
          <View style={styles.centeredInContainer}>
            <Text style={this.props.linkStyle}>{this.props.linkText}</Text>
          </View>
          {this.props.showIcon ?
            <View style={styles.centeredInContainer}>
              <Icon
                size={20} style={styles.iconStyle}
                name='ios-arrow-forward' color={iconColor}
              />
            </View>
            : null
          }
        </TouchableOpacity>
        );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  centeredInContainer: {
    justifyContent: 'center',
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default ExternalLink;
