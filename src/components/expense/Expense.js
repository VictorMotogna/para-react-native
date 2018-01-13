import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Linking} from 'react-native';
import {NavigationActions} from 'react-navigation';

const util = require('util');

export default class Expense extends Component {
    static navigationOptions = {
        title: 'Expense',
    };

    state = {
        id: "",
        name: "",
        description: "",
        price: 0,
        userId: 0
    };

    sendEmail() {
        let url = "mailto:";
        url += "?subject=";
        url += "&body=";
        Linking.openURL(url);
    }

    componentWillMount() {
        var {params: {userId}} = this.props.navigation.state;
        this.setState({userId: userId});
    }

    async editExpense(name, description, price) {
        var {params: {id}} = this.props.navigation.state;
        var link = 'https://ovesenterprise.ro/para/expenses.php?change=true&id=' + id + '&name=' + name + '&description=' + description + '&price=' + price + '&userId=' + this.state.userId;
        console.warn(link);
        fetch(link)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({homeData: responseJson});
                this.setState({dataLoaded: true});
            })
            .catch(error => {
                console.error(error);
            });

        const navigateLoading = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'ExpenseList'})
            ]
        });
        this.props.navigation.dispatch(navigateLoading);
    }

    render() {
        var {params: {id}} = this.props.navigation.state;
        var {params: {name}} = this.props.navigation.state;
        var {params: {description}} = this.props.navigation.state;
        var {params: {price}} = this.props.navigation.state;

        return (
            <View>
                <TextInput value={id}
                           onChangeText={(id) => this.setState({id})}/>
                <TextInput placeholder={name}
                           onChangeText={(name) => this.setState({name})}/>
                <TextInput placeholder={description}
                           onChangeText={(description) => this.setState({description})}/>
                <TextInput placeholder={price}
                           onChangeText={(price) => this.setState({price})}/>


                <TouchableOpacity
                    onPress={
                        this.props.expenses =
                            () => this.editExpense(this.state.name, this.state.description, this.state.price)
                    }>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}