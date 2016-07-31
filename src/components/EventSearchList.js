import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EventList from './EventList';

import {
  View,
} from 'react-native';

class EventSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.updateFilter = this.updateFilter.bind(this);
    this.renderListViewHeader = this.renderListViewHeader.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(text) {
    this.setState({ filter: text.toLowerCase() });
  }

  renderListViewHeader() {
    return (
      <SearchBar onChange={this.updateFilter} />
    );
  }

  render() {
    let events = this.props.events.filter((event) => (
      event.title.toLowerCase().includes(this.state.filter)
    ));

    return (
      <View style={{ flex: 1 }}>
        <EventList
          events={events} navigator={this.props.navigator}
          renderHeader={this.renderListViewHeader}
        />
      </View>
    );
  }
}

export default EventSearchList;
