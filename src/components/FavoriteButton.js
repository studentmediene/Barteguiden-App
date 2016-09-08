import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as favoriteActions from '../actions/favorites';
import ActionButton from './ActionButton';
import { favoriteColor, containerColor } from '../colors';
import { getPlatformIcon } from '../utilities';

import {
  View,
} from 'react-native';

class FavoriteButton extends Component {
  onPress = () => {
    this.props.actions.toggleFavoriteEvent(this.props.event);
  };

  _getFavoriteIcon() {
    if (this.props.event.isFavorite) {
      return getPlatformIcon('favoriteOn');
    }
    return getPlatformIcon('favoriteOff');
  }

  render() {
    return (
      <View>
        <ActionButton
          onPress={this.onPress}
          iconName={this._getFavoriteIcon()}
          iconColor={favoriteColor}
          backgroundColor={containerColor}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(favoriteActions, dispatch),
});

export default connect(null, mapDispatchToProps)(FavoriteButton);
