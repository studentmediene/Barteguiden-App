/**
 * Created by annakastet on 18/11/15.
 */
 import React, { Component } from 'react';
 import {
  formatDate,
  formatPrice,
  categoryToImage,
  ageLimitToText,
  getTimeFromDate } from '../utilities';
 import { categoryImages } from '../constants';

 import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

 class EventDetailsImage extends Component {
   render() {
     return (
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: this.props.event.imageUrl }}
          >
          </Image>
        </View>
        <View style={styles.eventContents}>
          <Text style={styles.title}>{this.props.event.title}</Text>
          <Text style={styles.subtitle}>{this.props.event.venue.name}</Text>
          <View style={styles.eventInfo}>
            <Text style={styles.subtitle}>
              {formatDate(this.props.event.startAt) + ' '
              + getTimeFromDate(this.props.event.startAt)}
            </Text>
            <View style={styles.iconRow}>
              <Text style={StyleSheet.flatten([styles.subtitle, styles.flex1])}>
                {ageLimitToText(this.props.event.ageLimit)}
              </Text>
              <Image
                style={styles.icon}
                source={categoryImages[categoryToImage(this.props.event.category)]}
              >
              </Image>

              <Text style={StyleSheet.flatten([styles.subtitle,
              styles.flex1, styles.textAlignRight])}>
                {formatPrice(this.props.event.price)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    ); }
}

 const styles = StyleSheet.create({
   title: {
     color: '#fff',
     fontSize: 30,
     fontWeight: 'bold',
   },
   subtitle: {
     color: '#fff',
     fontSize: 15,
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
