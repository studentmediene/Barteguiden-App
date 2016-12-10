import React from 'react';
import EventList from '../components/EventList';
import { EmptyFavoriteList } from '../components/EmptyListMessages';
import _ from 'lodash';

export default ({ events }) => (
  <EventList
    events={_.filter(events, event => (event.isFavorite))}
    emptyListMessage={EmptyFavoriteList}
  />
);
