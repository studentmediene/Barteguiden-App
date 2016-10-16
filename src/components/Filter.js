import React, { Component } from 'react';
import BarteguidenNavigator from '../BarteguidenNavigator';

import {
    View, 
    Text,
} from 'react-native'; 


export default ({title}) => (
    <BarteguidenNavigator title={title}>
        <View>
            <Text> hei </Text>
        </View>
    </BarteguidenNavigator>
);
