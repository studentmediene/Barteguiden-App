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


var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black'
  }
})

var PromotedEventSwiper = React.createClass({
  render: function() {
    let promotedEvents = this.props.events.filter(event => event.isPromoted);
    return (
      <Swiper
        style={styles.wrapper}
        height={200}
        autoplay={true}
        autoplayTimeout={5}
        dot={<View style={{backgroundColor:'rgba(255,255,255,.5)', width: 5, height: 5,
                           borderRadius: 4, marginLeft: 3, marginRight: 3,
                           marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8,
                                 borderRadius: 4, marginLeft: 3, marginRight: 3,
                                 marginTop: 3, marginBottom: 3,}}/>}>
        {promotedEvents.map(promoted => {
          return (
            <PromotedEvent key={promoted._id} promoted={promoted}/>
          )})
        }
      </Swiper>
    )
  }
})

export default PromotedEventSwiper;
