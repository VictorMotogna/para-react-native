import React, {Component} from 'react';
import {AsyncStorage, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationActions} from 'react-navigation';

const util = require('util');

export default class Splash extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "none"
    };

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem('@Username:key');
            if (value !== null) {
                this.setState({username: value});
            }
        } catch (error) {
            // Error retrieving data
            console.warn(error)
        }
    }

    _login = () => {
        global.username = this.state.username;
        if (this.state.username == "none") {
            this.props.navigation.navigate("Login", {});
        } else {
            const navigateLoading = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'ExpenseList'})
                ]
            });
            this.props.navigation.dispatch(navigateLoading);
        }
    }

    static navigationOptions = {
        title: 'Splash screen',
    };

    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{flex: 1, marginTop: 180}}>
                    <Text style={styles.title}>Para</Text>
                    <Text style={styles.subtitle}>Made by Victor Motogna</Text>
                </View>
                <View style={styles.login}>
                    <Button
                        onPress={
                            () => {
                                this._login()
                            }
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