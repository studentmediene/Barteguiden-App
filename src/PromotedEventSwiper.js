/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import Swiper from 'react-native-swiper';
import PromotedEvent from './PromotedEvent';

var {
  StyleSheet,
  Text,
  View,
} = React;

var PromotedEventSwiper = React.createClass({
  render: function() {
    let promotedEvents = this.props.events.filter(event => event.isPromoted);
    return (
      <Swiper
        height={200}
        autoplay={true}
        autoplayTimeout={5}
        dot={<View style={{backgroundColor:'rgba(255,255,255,.5)', width: 5, height: 5,
                           borderRadius: 4, marginLeft: 3, marginRight: 3,
                           marginTop: 3, marginBottom: 3, bottom: -15}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8,
                                 borderRadius: 4, marginLeft: 3, marginRight: 3,
                                 marginTop: 3, marginBottom: 3, bottom: -15}}/>}>
        {promotedEvents.map(promoted => {
          return (
            <PromotedEvent navigator={this.props.navigator} key={promoted._id}
              promoted={promoted}/>
          )})
        }
      </Swiper>
    )
  }
})

var styles = StyleSheet.create({
})

export default PromotedEventSwiper;
