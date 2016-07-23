'use strict';

import React from  'react-native'
import EventListItem from './EventListItem';
import _ from 'lodash';
import {formatDate} from '../utilities';
import {backgroundColor, highlightColor} from '../colors';

const {
  StyleSheet,
  Text,
  View,
  ListView,
  Component,
} = React;


class EventList extends Component {
  constructor() {
    super();
    this._updateDataSource = this._updateDataSource.bind(this);
    this._renderEvent = this._renderEvent.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }),
      loaded: false,
    }
  }

  componentWillMount() {
    if (this.props.events) {
      this._updateDataSource(this.props.events);
    }
  }

  componentWillReceiveProps(props) {
    this._updateDataSource(props.events);
  }

  _updateDataSource(events) {
     let newDataBlob = _.groupBy(events, (event) => {
        return formatDate(event.startAt);
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(newDataBlob)
      });
  }

  _renderEvent(event) {
    return(
        <EventListItem navigator={this.props.navigator} event={event}/>
    )
  }

  render() {
   return (<ListView
     dataSource={this.state.dataSource}
     renderRow={this._renderEvent}
     renderSectionHeader = {this._renderSectionHeader}
     automaticallyAdjustContentInsets={false}
     contentInset={{bottom:49}}
     style={styles.listView}
   />)
  }

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.sectionHeader}>{sectionID}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  listView: {
    backgroundColor: backgroundColor,
  },
  sectionHeader: {
    marginLeft: 10,
    // marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  headerContainer: {
    borderBottomWidth: 3,
    borderColor: highlightColor,
    backgroundColor: backgroundColor,
  }
});

export default EventList;
