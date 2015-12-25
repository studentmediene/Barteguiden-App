'use strict';

import React from 'react-native';
import EventList from '../components/EventList';
import BarteguidenNavigator from '../BarteguidenNavigator';

export default ({events, title}) => (
  <BarteguidenNavigator title={title}>
    <EventList events={events}/>
  </BarteguidenNavigator>
);
