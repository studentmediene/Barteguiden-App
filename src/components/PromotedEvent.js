import React, { Component } from 'react';
import EventDetailsImage from './EventDetailsImage';

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


class PromotedEvent extends Component {

  _onPressEvent = () => {
    this.props.navigator.push({ id: 1, title: 'Detaljer', event: this.props.promoted });
  };

  render() {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this._onPressEvent}>
        <EventDetailsImage event={this.props.promoted} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default PromotedEvent;
