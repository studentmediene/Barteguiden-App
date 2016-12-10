import React from 'react';
import EventList from '../components/EventList';
import PromotedEventSwiper from '../components/PromotedEventSwiper';
import { View } from 'react-native';
import { EmptyEventList } from '../components/EmptyListMessages';
import _ from 'lodash';


export default ({ events }) => (
  <View style={{ flex: 1 }}>
    <PromotedEventSwiper events={events} />
    <EventList events={_.take(events, 10)} emptyListMessage={EmptyEventList} />
  </View>
);
