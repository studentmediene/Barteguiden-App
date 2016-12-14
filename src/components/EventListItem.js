import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getTimeFromDate,
  formatPrice,
  categoryToImage,
  normalize } from '../utilities';
import { categoryImages } from '../constants';
import { separatorColor, containerColor } from '../colors';

import { pushNavRoute } from '../actions/navigation';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class EventListItem extends Component {
  _onPressEvent = () => {
    const routeProp = { event: this.props.event };
    this.props.dispatch(pushNavRoute(
      1, 'cardstack', routeProp));
  };

  render() {
    const { category, title, venue, price, startAt } = this.props.event;
    return (
      <TouchableOpacity
        onPress={this._onPressEvent} style={styles.onTouch}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={categoryImages[categoryToImage(category)]}
          />
          <View style={styles.eventContents}>
            <Text style={styles.eventTitle}>{title}</Text>
            <View style={styles.eventInfo}>
              <Text
                style={[styles.secondaryInfo, styles.venue]} ellipsizeMode='tail'
                numberOfLines={1}
              >
                {getTimeFromDate(startAt)} {venue && venue.name ? venue.name.trim() : null}
              </Text>
              <Text style={[styles.secondaryInfo, styles.price]}>{formatPrice(price)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: containerColor,
    borderBottomWidth: 1,
    borderColor: separatorColor,
  },
  image: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: 10,
  },
  eventTitle: {
    fontSize: normalize(18),
  },
  eventContents: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryInfo: {
    fontSize: normalize(14),
  },
  price: {
    textAlign: 'right',
    flex: 2,
  },
  venue: {
    flex: 5,
  },
  onTouch: {
  },
});

export default connect()(EventListItem);
