/**
 * Created by annakastet on 18/11/15.
 */
import React from 'react-native'
import {formatDate, formatPrice, categoryToImage} from '../utilities';
import {categoryImages} from '../constants';

const {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  } = React;

class EventDetailsImage extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{uri: this.props.event.imageUrl}}>
          </Image>
        </View>
        <View style={styles.eventContents}>
          <Text style={styles.title}>{this.props.event.title}</Text>
          <View style={styles.eventInfo}>
            <Text style={styles.subtitle}>{this.props.event.venue.name}</Text>
            <Text style={styles.subtitle}>{formatDate(this.props.event.startAt)}</Text>
            <Text style={styles.subtitle}>{formatPrice(this.props.event.price)}</Text>
            <View style={styles.iconRow}>
              <Image
                style={styles.icon}
                source={categoryImages[categoryToImage(this.props.event.category)]}>
              </Image>
              {this.props.event.isPromoted ? <Image  style={styles.icon} source={ require('../img/promoted_star.png')}></Image>:null}
            </View>
          </View>
        </View>
      </View>
    )}
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: Image.resizeMode.cover,
    flex: 1,
    opacity: 0.5,
  },
  icon: {
    resizeMode: Image.resizeMode.contain,
    flex: 1,
    opacity: 1,
  },
  eventContents: {
    margin: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapper: {
    flex: 1,
  },
  imageWrapper: {
    backgroundColor: 'black',
    flex: 1,
  }
});

export default EventDetailsImage;
