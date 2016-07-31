/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import EventDescription from './EventDescription';
import EventDetailsImage from './EventDetailsImage';
import ActionToolbar from './ActionToolbar';
import ExternalLink from './ExternalLink';
import {backgroundColor, highlightColor, containerColor, separatorColor} from '../colors';

import {
  StyleSheet,
  View,
  Image,
  Linking,
  ScrollView,
  Platform,
} from 'react-native';

class EventDetails extends Component {
  render() {
    let bottomPadding = Platform.OS === "android" ? 0 : 50;
    return (
      <View style={[styles.container, {paddingBottom: bottomPadding}]}>
        <EventDetailsImage event={this.props.event}/>
        <ActionToolbar event={this.props.event} />
        <ScrollView style={styles.scroll}>
          <EventDescription event={this.props.event}/>
          <View style={styles.externalLinkContainer}>
            <ExternalLink linkStyle={styles.externalLink}
              containerStyle={[styles.externalLinkRow, styles.bottomBorder]}
              showIcon={true} url={this.props.event.eventUrl}
              linkText={'Besøk nettsiden'} iconStyle={styles.linkIconStyle}/>
            <ExternalLink linkStyle={styles.externalLink}
              containerStyle={styles.externalLinkRow} showIcon={true}
              onPress={this.onMapClick.bind(this)} linkText={'Åpne i kart'}
              iconStyle={styles.linkIconStyle}/>
          </View>
        </ScrollView>
      </View>
    );
  }

  onMapClick() {
    let {latitude, longitude, name} = this.props.event.venue;
    let url;

    if (Platform.OS === 'android') {
      url = 'geo:0,0?q=' + latitude + ',' + longitude + '(' + name + ')';
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
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  externalLink: {
    fontSize: 16,
    flexDirection: 'row',
    flex: 1,
    color: 'black',
  },
  externalLinkRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomBorder: {
    borderColor: separatorColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scroll: {
    backgroundColor: backgroundColor,
  },
  externalLinkContainer: {
    flexDirection: 'column',
    backgroundColor: containerColor,
    borderColor: separatorColor,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default EventDetails;
