import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventActions from '../actions/events';
import { jumpToTab, popNavRoute } from '../actions/navigation';

import ActionToolbar from '../components/ActionToolbar';
import ApplicationCardStack from './ApplicationCardStack';

import {
  TabBarIOS,
} from 'react-native';


class ApplicationTabs extends Component {
  componentWillMount() {
    ActionToolbar.addCalendarListeners();
  }

  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  componentWillUnmount() {
    ActionToolbar.removeCalendarListeners();
  }

  _onTabNavigate(key) {
    if (this.props.cardStackNavigation.index === 1) {
      this.props.dispatch(popNavRoute(this.props.cardStackNavigation.key));
    }
    this.props.dispatch(jumpToTab(key, this.props.tabNavigation.key));
  }

  render() {
    const { tabNavigation } = this.props;
    const children = tabNavigation.routes.map((tab, i) => {
      const TabComponent = tab.component;
      return (
        <TabBarIOS.Item
          key={tab.key}
          icon={{ uri: tab.iconUri, isStatic: true, scale: 2 }}
          title={tab.title} onPress={() => this._onTabNavigate(i)}
          selected={tabNavigation.index === i}
        >
          <ApplicationCardStack events={this.props.events} tabComponent={TabComponent} />
        </TabBarIOS.Item>
    );
    });
    return (
      <TabBarIOS>
        { children }
      </TabBarIOS>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents,
  tabNavigation: state.tabNavigation,
  cardStackNavigation: state.cardStackNavigation,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
