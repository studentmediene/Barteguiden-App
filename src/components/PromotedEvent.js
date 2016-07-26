'use strict';

import React, {Component} from 'react';
import EventDetailsImage from './EventDetailsImage';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


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
