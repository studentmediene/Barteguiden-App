/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import EventDetailsImage from './EventDetailsImage';

const {
  Text,
  View,
  Image,
  TouchableOpacity,
  Component
} = React;


class PromotedEvent extends Component {

  render() {
    const {imageUrl, title, venue, startAt, price} = this.props.promoted;
    return (
      <TouchableOpacity onPress={this._onPressEvent.bind(this)}>
        <EventDetailsImage event={this.props.promoted}/>
      </TouchableOpacity>
    )
  }

  _onPressEvent(event) {
    this.props.navigator.push({id: 1, title:'Detaljer', event: this.props.promoted});
  }
}

export default PromotedEvent;
