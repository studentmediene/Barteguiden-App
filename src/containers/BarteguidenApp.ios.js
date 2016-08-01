'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventActions from '../actions/events';
import BarteguidenNavigator from '../BarteguidenNavigator';
import Views from '../views/index';

import {
  TabBarIOS,
} from 'react-native';


class BarteguidenApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
    this.props.actions.fetchEvents();
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
              icon={{ uri: view.iconUri, isStatic: true, scale: 2 }}
              selected={this.state.selectedTab === view.id}
              onPress={() => {
                this.setState({
                  selectedTab: view.id,
                });
              }}
            >
              <RouteComponent title={view.title} events={this.props.events} />
            </TabBarIOS.Item>
          );
        })}
      </TabBarIOS>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarteguidenApp);
