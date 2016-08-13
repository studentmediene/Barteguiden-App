import React from 'react';
import BarteguidenNavigator from '../BarteguidenNavigator';
import SettingsView from '../components/SettingsView';

export default ({ title }) => (
  <BarteguidenNavigator title={title}>
    <SettingsView />
  </BarteguidenNavigator>
);
