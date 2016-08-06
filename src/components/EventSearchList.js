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
  }

  updateFilter(text) {
    this.setState({ filter: text.toLowerCase() });
  }

  render() {
    let events = this.props.events.filter((event) => (
      event.title.toLowerCase().includes(this.state.filter)
    ));

    return (
      <View style={{ flex: 1 }}>
        <SearchBar onChange={this.updateFilter} />
        <EventList events={events} navigator={this.props.navigator} />
      </View>
    );
  }
}

export default EventSearchList;
