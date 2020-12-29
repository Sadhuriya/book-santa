import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header, Icon, Badge} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase/app'

export default class SwipeableFlatList extends Component{
render(){
    return(
        <View>
            <Text>
                Swipaeble FlatList
            </Text>
        </View>
    )

    }
}