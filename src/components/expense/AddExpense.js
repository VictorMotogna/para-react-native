import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image} from 'react-native';

const util = require('util');

export default class Login extends Component {
    static navigationOptions = {
        title: 'Add expense screen',
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="username"
                    placeholderTextColor="#7f8c8d"
                    returnKeyType="next"
                    style={styles.input}/>
                <TextInput
                    placeholder="password"
                    placeholderTextColor="#7f8c8d"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 40
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(125,125,125,0.2)',
        marginBottom: 12,
        color: '#7f8c8d',
        paddingHorizontal: 10,
        borderRadius: 12
    },

    buttonContainer: {
        backgroundColor: '#7f8c8d',
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 10
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff'
    }
});