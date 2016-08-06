import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import EventDescription from './EventDescription';
import EventDetailsImage from './EventDetailsImage';
import ActionToolbar from './ActionToolbar';
import ExternalLink from './ExternalLink';
import { backgroundColor, separatorColor, containerColor } from '../colors';

import {
  StyleSheet,
  View,
  Linking,
  ScrollView,
  Platform,
} from 'react-native';

class EventDetails extends Component {
  constructor() {
    super();
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick() {
    const { latitude, longitude, name } = this.props.event.venue;
    let url;

    if (Platform.OS === 'android') {
      url = 'geo:0,0?q=${latitude},${longitude}(${name})';
    } else {
      url = `http://maps.apple.com/?q=${name.split(' ').join('+')}&sll=${latitude},${longitude}&z=10`;
    }

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  }

  render() {
    const bottomPadding = Platform.OS === 'android' ? 0 : 50;
    return (
      <View style={[styles.container, { paddingBottom: bottomPadding }]}>
        <EventDetailsImage event={this.props.event} />
        <ActionToolbar event={this.props.event} />
        <ScrollView style={styles.scroll}>
          <EventDescription event={this.props.event} />
          <View style={styles.externalLinkContainer}>
            <ExternalLink
              linkStyle={styles.externalLink}
              containerStyle={[styles.externalLinkRow, styles.bottomBorder]}
              showIcon url={this.props.event.eventUrl}
              linkText={'Besøk nettsiden'} iconStyle={styles.linkIconStyle}
            />
            <ExternalLink
              linkStyle={styles.externalLink}
              containerStyle={styles.externalLinkRow} showIcon
              onPress={this.onMapClick} linkText={'Åpne i kart'}
              iconStyle={styles.linkIconStyle}
            />
          </View>
        </ScrollView>
      </View>
    );
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
    backgroundColor,
  },
  externalLinkContainer: {
    flexDirection: 'column',
    backgroundColor: containerColor,
    borderColor: separatorColor,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const mapStateToProps = (state, ownProps) => ({
  event: _.find(state.events.allEvents, (event) => (
    event._id === ownProps.eventID
  )),
});

export default connect(mapStateToProps)(EventDetails);
