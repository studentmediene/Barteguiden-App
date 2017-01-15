import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EventList from './EventList';

import {
  View,
} from 'react-native';


class EventSearchList extends Component {

  state = { filter: '', categoryFilter: '' };

  updateFilter = (text) => {
    this.setState({ filter: text.toLowerCase() });
  };

  renderListViewHeader = () => (
    <SearchBar onChange={this.updateFilter} />
  );

  render() {
    const events = this.props.events.filter(event => (
      event.title.toLowerCase().includes(this.state.filter)
    ));
    const EmptyListMessage = this.props.emptyListMessage;


    return (
      <View style={{ flex: 1 }}>
        <EventList
          events={events}
          renderHeader={this.renderListViewHeader}
        />
        {events.length > 0 ? null : <EmptyListMessage />}
      </View>
    );
  }
}

export default EventSearchList;
