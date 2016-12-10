import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filter from '../components/Filter';

import * as eventActions from '../actions/events';
import Home from '../views/Home';
import AllEvents from '../views/AllEvents';
import FavoriteEvents from '../views/FavoriteEvents';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { topColor, highlightColor } from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import {
  StyleSheet,
  View,
} from 'react-native';


class BarteguidenApp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  onActionSelected = (position) => {
    if (position === 0) {
      this.setModalVisible(true);
    } else if (position === 1) {
      this.props.navigator.push({ id: 3 });
    }
  }

  onFilterSubmit = (categoryCheck) => {
    this.props.actions.filterEvents(categoryCheck);
    this.setState({ modalVisible: false });
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const filteredEvents = _.filter(this.props.events, (event) => {
      if (_.includes(this.props.filteredCategories, event.category)) {
        return event;
      }
      return null;
    });

    return (
      <View
        style={styles.container}
      >
        <Filter
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          onFilterSubmit={this.onFilterSubmit}
        />
        <Icon.ToolbarAndroid
          style={styles.toolbar}
          title='Barteguiden'
          onIconClicked={() => this.props.navigator.pop()}
          actions={[{ title: 'Filter', show: 'always', iconName: 'md-funnel' },
          { title: 'Innstillinger', show: 'always', iconName: 'md-more' }]}
          onActionSelected={this.onActionSelected}
        />
        <ScrollableTabView
          tabBarUnderlineStyle={{ backgroundColor: highlightColor }}
          tabBarBackgroundColor={topColor}
          tabBarActiveTextColor={highlightColor}
        >
          <Home events={this.props.events} title='Home' tabLabel='Hva skjer?' />
          <AllEvents events={filteredEvents} title='All' tabLabel='Alle' />
          <FavoriteEvents events={this.props.events} title='Favorites' tabLabel='Favoritter' />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: topColor,
    height: 56,
  },
});

const mapStateToProps = state => ({
  events: state.events.allEvents,
  filteredCategories: state.filter.filteredCategories,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarteguidenApp);
