import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const util = require('util');

export default class Splash extends Component {
    static navigationOptions = {
        title: 'Splash screen',
    };
    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ flex: 1, marginTop: 180 }}>
                    <Text style={ styles.title }>Para</Text>
                    <Text style={ styles.subtitle }>Made by Victor Motogna</Text>
                </View>
                <View style={ styles.login }>
                    <Button
                        onPress={
                            () => navigate("Login", {})
                        }
                        title="Log in"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        color: '#e74c3c',
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: 15,
        color: '#e74c3c'
    },

    login: {
        marginBottom: 50
    }
});