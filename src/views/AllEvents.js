import React, { Component } from 'react';
import EventSearchList from '../components/EventSearchList.js';
import { EmptyEventList } from '../components/EmptyListMessages';
import _ from 'lodash';

import { connect } from 'react-redux';

class AllEvents extends Component {
  render() {
    const filteredEvents = _.filter(this.props.events, (event) => {
      if (_.includes(this.props.filteredCategories, event.category)) {
        return event;
      }
      return null;
    });

    return <EventSearchList events={filteredEvents} emptyListMessage={EmptyEventList} />;
  }
}

const mapStateToProps = state => ({
  filteredCategories: state.filter.filteredCategories,
});

export default connect(mapStateToProps)(AllEvents);
