/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import EventStore from './src/EventStore';
import BarteguidenNavigator from './src/BarteguidenNavigator';
import Views from './src/views/index';

import {
  TabBarIOS,
  AppRegistry,
} from 'react-native';


class BarteguidenApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
      events: []
    };
  }

  async componentDidMount() {
    let events = await EventStore.fetchEvents();
    this.setState({events});
  }

  render() {
    return (
      <TabBarIOS>
        {Views.map((view) => {
          let RouteComponent = view.component;

          return (
            <TabBarIOS.Item
              key={view.id}
              title={view.title}
              icon={{ uri: view.iconUri, isStatic: true, scale: 2}}
              selected={this.state.selectedTab === view.id}
              onPress={() => {
                this.setState({
                  selectedTab: view.id,
                });
              }}>
              <RouteComponent title={view.title} events={this.state.events}/>
            </TabBarIOS.Item>
          )
        })}
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('BarteguidenApp', () => BarteguidenApp);
