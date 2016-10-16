import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import EventDescription from './EventDescription';
import EventDetailsImage from './EventDetailsImage';
import ActionToolbar from  './ActionToolbar';
import ExternalLink from './ExternalLink';
import { backgroundColor, separatorColor, favoriteColor, containerColor } from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { getPlatformIcon, normalize } from '../utilities';

import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
} from 'react-native';

class EventDetails extends Component {

  render() {
    const bottomPadding = Platform.OS === 'android' ? 0 : 50;
    return (
      <View style={[styles.container, { paddingBottom: bottomPadding }]}>
        <EventDetailsImage event={this.props.event} />
        <ActionToolbar event={this.props.event} />
        <ScrollView style={styles.scroll}>
          <View>
            {this.props.event.isPromoted ?
              <View style={styles.promotion}>
                <Icon
                  name={getPlatformIcon('star')}
                  size={30} color={favoriteColor}
                />
                <Text style={styles.promoted}> Denne hendelsen er anbefalt </Text>
              </View> : null}
          </View> : null}
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
  promotion: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  promoted: {
    fontSize: normalize(20),
    alignSelf: 'center',
  },

});

const mapStateToProps = (state, ownProps) => ({
  event: _.find(state.events.allEvents, event => (
     event._id === ownProps.eventID
   )),
});

export default connect(mapStateToProps)(EventDetails);
