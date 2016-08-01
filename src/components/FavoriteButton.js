'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as favoriteActions from '../actions/favorites';
import ActionButton from './ActionButton';
import { actionIconSize } from '../constants';
import { favoriteColor, containerColor } from '../colors';
import { getPlatformIcon } from '../utilities';

import {
  View,
  Text,
} from 'react-native';

class FavoriteButton extends Component {
  render() {
    return (
      <View>
        <ActionButton onPress={this.onClick.bind(this)}
          iconName={this._getFavoriteIcon()}
          iconColor={favoriteColor}
          backgroundColor={containerColor}
        />
      </View>
    );
  }

  onClick() {
    this.props.actions.toggleFavoriteEvent(this.props.event);
  }

  _getFavoriteIcon() {
    if (this.props.event.isFavorite) {
      return getPlatformIcon('favorite-on');
    }
    else {
      return getPlatformIcon('favorite-off');
    }
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(favoriteActions, dispatch),
});

export default connect(null, mapDispatchToProps)(FavoriteButton);
