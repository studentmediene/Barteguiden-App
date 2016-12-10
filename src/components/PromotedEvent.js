import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventDetailsImage from './EventDetailsImage';
import { pushNavRoute } from '../actions/navigation';

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class PromotedEvent extends Component {

  _onPressEvent = () => {
    const routeProp = { event: this.props.promoted };
    this.props.dispatch(pushNavRoute(
      1, 'cardstack', routeProp));
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

export default connect()(PromotedEvent);
