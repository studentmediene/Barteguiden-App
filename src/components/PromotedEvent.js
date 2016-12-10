import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventDetailsImage from './EventDetailsImage';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import globalRoutes from '../routes';

const { pushRoute } = navigationActions;

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class PromotedEvent extends Component {

  _onPressEvent = () => {
    const route = globalRoutes[1];
    route.event = this.props.promoted;
    this.props.dispatch(pushRoute(
      route, 'cardstack'));
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
