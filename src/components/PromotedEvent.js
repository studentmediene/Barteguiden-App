'use strict';

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import EventDetailsImage from './EventDetailsImage';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


class PromotedEvent extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this._onPressEvent.bind(this)}>
        <EventDetailsImage event={this.props.promoted}/>
      </TouchableOpacity>
    )
  }

  _onPressEvent(event) {
    this.props.navigator.push({id: 1, title:'Detaljer', event: this.props.promoted});
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

export default PromotedEvent;
