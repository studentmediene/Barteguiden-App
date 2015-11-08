'use strict';

import React from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

var EventListItem = React.createClass({
  render: function() {
    return(
      <TouchableOpacity onPress={this._onPressEvent} style={styles.onTouch}>
        <View style={styles.container}>
          <Text style={styles.eventTitle}>{this.props.event.title}</Text>
        </View>
      </TouchableOpacity>
    )
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
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
  },
  eventTitle: {
    fontSize: 15,
    margin: 10,
  },
  onTouch: {
  },
});

export default EventListItem;
