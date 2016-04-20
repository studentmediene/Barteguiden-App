'use strict';

import React from 'react-native'
import ActionButton from './ActionButton';
import {actionIconSize, iOSBlue} from '../constants';
import {getPlatformIcon} from '../utilities';

var Share = require('react-native-share');

const {
  StyleSheet,
  View,
  Component,
  } = React;

class ShareButton extends Component {
  render() {
    return (
      <View>
        <ActionButton onClick={this.onClick.bind(this)} iconName={getPlatformIcon('share')}
                      iconSize={actionIconSize} styles={styles.button} iconColor={iOSBlue}/>
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
