'use strict';

var React = require('react-native');
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
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
    margin: 3,
  },
  eventTitle: {
    fontSize: 16,
    margin: 10,
  },
  onTouch: {
  },
});

module.exports = EventListItem;