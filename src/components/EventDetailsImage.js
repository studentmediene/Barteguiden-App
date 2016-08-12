import React from 'react';

import {
  formatDate,
  formatPrice,
  categoryToImage,
  ageLimitToText,
  normalize,
  getTimeFromDate } from '../utilities';
import { categoryImages } from '../constants';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const EventDetailsImage = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={{ uri: props.event.imageUrl }}
      />
    </View>
    <View style={styles.eventContents}>
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {props.event.title}
      </Text>
      <Text style={styles.subtitle}>{props.event.venue.name.trim()}</Text>
      <View style={styles.eventInfo}>
        <Text style={styles.subtitle}>
          {formatDate(props.event.startAt)} {getTimeFromDate(props.event.startAt)}
        </Text>
        <View style={styles.iconRow}>
          <Text style={StyleSheet.flatten([styles.subtitle, styles.flex1])}>
            {ageLimitToText(props.event.ageLimit)}
          </Text>
          <Image
            style={styles.icon}
            source={categoryImages[categoryToImage(props.event.category)]}
          />

          <Text
            style={StyleSheet.flatten([styles.subtitle,
            styles.flex1, styles.textAlignRight])}
          >
            {formatPrice(props.event.price)}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: normalize(26),
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  image: {
    resizeMode: Image.resizeMode.cover,
    flex: 1,
    opacity: 0.5,
  },
  icon: {
    resizeMode: Image.resizeMode.contain,
    flex: 1,
    opacity: 1,
  },
  eventContents: {
    margin: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  imageWrapper: {
    backgroundColor: 'black',
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  textAlignRight: {
    textAlign: 'right',
  },
});

export default EventDetailsImage;
