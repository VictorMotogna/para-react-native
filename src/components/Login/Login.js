import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Image,
    AsyncStorage
} from 'react-native';
import {NavigationActions} from 'react-navigation';

const util = require('util');

export default class Login extends Component {
    state = {
        username: "vic",
        id: "",
        password: "test123",
        role: 1,
        loginButton: 'Login'
    }

    static navigationOptions = {
        title: 'Login screen',
    };

    _signIn = () => {
        fetch('https://ovesenterprise.ro/para/login.json')
            .then(response => response.json())
            .then(responseJson => {
                var ok = false;

                for (var i = 0; i < responseJson.users.length; i++) {
                    if (this.state.username == responseJson.users[i].username && this.state.password == responseJson.users[i].password) {
                        global.username = responseJson.users[i].username;
                        ok = true;
                    }
                }

                if (ok == true) {
                    this.setUsername();

                    const navigateLoading = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'ExpenseList'})
                        ]
                    });
                    this.props.navigation.dispatch(navigateLoading);

                } else {
                    this.setState({loginButton: "Try again"})
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    async setUsername() {
        try {
            await AsyncStorage.setItem('@Username:key', this.state.username);
        } catch (error) {
            // Error saving data
        }

        try {
            await AsyncStorage.setItem('@Id:key', this.state.id);
        } catch (error) {
            // Error saving data
        }
    }

    render() {
        const {navigate} = this.props.navigation;
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
                            onChangeText={(username) => this.setState({username})}
                            style={styles.input}/>
                        <TextInput
                            placeholder="password"
                            placeholderTextColor="#7f8c8d"
                            returnKeyType="go"
                            secureTextEntry
                            onChangeText={(password) => this.setState({password})}
                            style={styles.input}/>

                        <TouchableOpacity
                            onPress={
                                () => {
                                    this._signIn()
                                }
                            }
                            style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>{this.state.loginButton}</Text>
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

    formContainer: {},

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