'use strict'

import React from 'react-native';
import SearchBar from './SearchBar';
import EventList from './EventList';

const {
  Component,
  View,
} = React;

class EventSearchList extends Component {
  constructor(props){
    super(props);
    this.state = {filter: ''};
  }

  render() {
    let events = this.props.events.filter( (event) => {
      return event.title.toLowerCase().includes(this.state.filter);
    });

    return (<View style={{flex: 1}}>
        <SearchBar onChange={this.updateFilter.bind(this)}/>
        <EventList events={events} navigator={this.props.navigator}/>
      </View>
    );
  }

  updateFilter(text) {
    this.setState({filter:text.toLowerCase()})
  }
}

export default EventSearchList;
