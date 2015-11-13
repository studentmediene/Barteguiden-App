/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import {formatDate, formatPrice} from './utilities';


var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;


var styles = StyleSheet.create({
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
    height: 200,
    opacity: 0.7
  },
  eventContents: {
    margin: 10,
    position: 'absolute',
    top: 0
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

var PromotedEvent = React.createClass({
  render: function() {
    return (
      <TouchableOpacity>
        <View style={{height: 200}}>
          <Image
            style={styles.image}
            source={{uri: this.props.promoted.imageUrl}}>
          </Image>
          <View style={styles.eventContents}>
            <Text style={styles.title}>{this.props.promoted.title}</Text>
            <View style={styles.eventInfo}>
              <Text style={styles.subtitle}>{this.props.promoted.venue.name}</Text>
              <Text style={styles.subtitle}>{formatDate(this.props.promoted.startAt)}</Text>
              <Text style={styles.subtitle}>{formatPrice(this.props.promoted.price)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
})

export default PromotedEvent;
