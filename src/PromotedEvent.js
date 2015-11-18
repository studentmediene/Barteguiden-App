/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import EventDetailsImage from './EventDetailsImage';

var {
  Text,
  View,
  Image,
  TouchableOpacity
} = React;


var PromotedEvent = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={this._onPressEvent}>
        <EventDetailsImage event={this.props.promoted}/>
      </TouchableOpacity>
    )
  },
  _onPressEvent: function(event: Object) {
    this.props.navigator.push({id: 1, title:'Detaljer', event: this.props.promoted});
  }
});

export default PromotedEvent;
