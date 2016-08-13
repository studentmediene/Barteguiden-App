import React from 'react';
import BarteguidenNavigator from '../BarteguidenNavigator';
import EventSearchList from '../components/EventSearchList.js';
import { EmptyEventList } from '../components/EmptyListMessages';

export default ({ events, title }) => (
  <BarteguidenNavigator title={title}>
    <EventSearchList events={events} emptyListMessage={EmptyEventList} />
  </BarteguidenNavigator>
);
