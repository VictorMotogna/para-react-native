import React, { Component } from 'react';
import { ImageBackground, TouchableHighlight, ScrollView, Image, View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

export default class ScrollViewItem extends Component {
    openPage(id, name, description, price, userId) {
        this.props.navigation.navigate("Expense", { id, name, description, price, userId });
    }

    render() {
        return (
            <TouchableHighlight underlayColor="#d8d8d8" onPress={() => {this.openPage(this.props.id, this.props.name, this.props.description, this.props.price, this.props.userId)}} >
                <View style={{borderRadius: 30, overflow: 'hidden', marginTop: 10, marginBottom: 10, position: 'relative'}}>
                    <Text> {this.props.name}      {this.props.price} </Text>
                </View>
            </TouchableHighlight>
        );
    }
}