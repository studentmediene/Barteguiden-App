'use strict';

import React from 'react';
import BarteguidenNavigator from '../BarteguidenNavigator';
import EventSearchList from '../components/EventSearchList.js';

export default ({events, title}) => (
  <BarteguidenNavigator title={title}>
    <EventSearchList events={events}/>
  </BarteguidenNavigator>
);
