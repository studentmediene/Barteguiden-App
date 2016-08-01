'use strict';

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import PromotedEvent from './PromotedEvent';

import { Text, View, Dimensions } from 'react-native';

const height = Dimensions.get('window').height / 3;

class PromotedEventSwiper extends Component {

  render() {
    const promotedEvents = this.props.events.filter(event => event.isPromoted)
      .slice(0, 10);
    return (
      <Swiper
        height={height}
        autoplay
        autoplayTimeout={5}
        dot={<View style={{ backgroundColor: 'rgba(255,255,255,.5)', width: 5, height: 5,
                           borderRadius: 4, marginLeft: 3, marginRight: 3,
                           marginTop: 3, marginBottom: 3, bottom: -15 }} />}
        activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8,
                                 borderRadius: 4, marginLeft: 3, marginRight: 3,
                                 marginTop: 3, marginBottom: 3, bottom: -15 }} />}
      >
        {promotedEvents.map(promoted => {
          return (
            <PromotedEvent navigator={this.props.navigator} key={promoted._id}
              promoted={promoted}
            />
          ); })
        }
      </Swiper>
    );
  }
}

export default PromotedEventSwiper;
