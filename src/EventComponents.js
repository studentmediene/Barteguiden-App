'use strict';

import React from 'react-native'
import {categoryToImage, getTimeFromDate} from './utilities';

var {
  Text,
  Image,
} = React;

export var CategoryImage = ({style, uri, category}) => (
  <Image
    style={style}
    source={{ uri: categoryToImage(category), isStatic: true }}/>
);

export var EventImage = ({style, uri}) => (
  <Image
    style={style}
    source={{ uri: uri}}/>
);

export var EventPrice = ({style, format, price}) => (
  <Text style={style}>{format ? format(price) : price}</Text>
);

export var EventTime = ({style, date}) => (
  <Text style={style}>{getTimeFromDate(date)}</Text>
);

export var EventDate = ({style, format, date}) => (
  <Text style={style}>{format ? format(date) : date}</Text>
);

export var EventDescription = ({style, description}) => (
  <Text style={style}>{description}</Text>
);

export var EventPromoted = ({style, promoted}) => (
  promoted ? <Text style={style}>Anbefalt</Text> : null
);
