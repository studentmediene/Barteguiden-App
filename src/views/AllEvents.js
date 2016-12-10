import React from 'react';
import EventSearchList from '../components/EventSearchList.js';
import { EmptyEventList } from '../components/EmptyListMessages';

export default ({ events }) => (
  <EventSearchList events={events} emptyListMessage={EmptyEventList} />
);
