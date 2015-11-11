'use strict';

import React from 'react-native';
import {getTimeFromDate, formatPrice} from './utilities';

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} = React;

var EventListItem = React.createClass({
  render: function() {
    return(
      <TouchableOpacity onPress={this._onPressEvent} style={styles.onTouch}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: this._categoryImage(this.props.event.category), isStatic: true }}
          />
          <View style={styles.eventContents}>
            <Text style={styles.eventTitle}>{this.props.event.title}</Text>
            <View style={styles.eventInfo}>
              <Text>{getTimeFromDate(this.props.event.startAt)} {this.props.event.venue.name}</Text>
              <Text>{formatPrice(this.props.event.price)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  },

  _categoryImage(category) {
    if (category) {
      var prefix = category.charAt(0);
      var suffix = category.substr(1).toLowerCase();
      return 'category' + prefix + suffix;
    }
    return 'categoryOther';
  },

  _onPressEvent: function(event: Object) {
    return (
      null // Do navigator stuff
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
  },
  image: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: 10
  },
  eventTitle: {
    fontSize: 18,
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
  onTouch: {
  },
});

export default EventListItem;
