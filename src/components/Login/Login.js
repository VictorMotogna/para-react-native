import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image} from 'react-native';

const util = require('util');

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login screen',
    };
    render() {
        var {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../img/flickr.png')}/>
                    <Text style={styles.title}>
                        Para: Your personal expense assistant.
                    </Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.formContainer}>
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

                        <TouchableOpacity
                            onPress={
                                () => navigate("ExpenseList", {})
                            }
                            style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    formContainer: {

    },

    logo: {
        width: 150,
        height: 150
    },

    title: {
        marginTop: 20,
        fontSize: 20,
        width: 220,
        textAlign: 'center'
    },

    formContainer: {
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