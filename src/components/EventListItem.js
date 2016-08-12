import React, { Component } from 'react';

import {
  getTimeFromDate,
  formatPrice,
  categoryToImage,
  normalize } from '../utilities';
import { categoryImages } from '../constants';
import { separatorColor, containerColor } from '../colors';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class EventListItem extends Component {
  constructor() {
    super();
    this._onPressEvent = this._onPressEvent.bind(this);
  }

  _onPressEvent() {
    if (this.props.navigator !== undefined) {
      this.props.navigator.push({
        id: 1, title: 'Detaljer',
        event: this.props.event,
      });
    }
  }

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
                {getTimeFromDate(startAt)} {venue.name.trim()}
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
    flex: 1.5,
  },
  venue: {
    flex: 5,
  },
  onTouch: {
  },
});

export default EventListItem;
