'use strict';

import React from 'react-native';
import {getTimeFromDate, formatPrice, categoryToImage} from '../utilities';

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Component,
} = React;

class EventListItem extends Component {
  render() {
    return(
      <TouchableOpacity onPress={this._onPressEvent.bind(this)} style={styles.onTouch}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: categoryToImage(this.props.event.category), isStatic: true }}
          />
          <View style={styles.eventContents}>
            <Text style={styles.eventTitle}>{this.props.event.title}</Text>
            <View style={styles.eventInfo}>
              <Text>{getTimeFromDate(this.props.event.startAt)} {this.props.event.venue.name}</Text>
              <Text>{formatPrice(this.props.event.price)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _onPressEvent(event: Object) {
    this.props.navigator.push({id: 1, title:'Detaljer', event: this.props.event});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
  },
  image: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: 10
  },
  eventTitle: {
    fontSize: 18,
  },
  eventContents: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onTouch: {
  },
});

export default EventListItem;
