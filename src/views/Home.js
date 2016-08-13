import React from 'react';
import EventList from '../components/EventList';
import PromotedEventSwiper from '../components/PromotedEventSwiper';
import BarteguidenNavigator from '../BarteguidenNavigator';
import { EmptyEventList } from '../components/EmptyListMessages';
import _ from 'lodash';


export default ({ events, title }) => (
  <BarteguidenNavigator title={title}>
    <PromotedEventSwiper events={events} />
    <EventList events={_.take(events, 10)} emptyListMessage={EmptyEventList} />
  </BarteguidenNavigator>
);
