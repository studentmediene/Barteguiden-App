import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventActions from '../actions/events';
import { jumpToTab } from '../actions/navigation';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { topColor, highlightColor } from '../colors';

import {
  StyleSheet,
  View,
} from 'react-native';

class ApplicationTabs extends Component {
  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  render() {
    const { dispatch, navigation } = this.props;
    const tabs = navigation.routes.map((tab) => {
      const TabComponent = tab.component;
      if (tab.isAndroidTab) {
        return (
          <TabComponent
            key={tab.key} tabLabel={tab.title}
            events={this.props.events}
          />
        );
      }
      return null;
    });
    return (
      <View
        style={styles.container}
      >
        <ScrollableTabView
          tabBarUnderlineStyle={{ backgroundColor: highlightColor }}
          tabBarBackgroundColor={topColor}
          tabBarActiveTextColor={highlightColor}
          onChangeTab={tab => dispatch(jumpToTab(tab.i, navigation.key))}
          initialPage={this.props.navigation.index}
        >
          {tabs}
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  events: state.events.allEvents,
  navigation: state.tabNavigation,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
