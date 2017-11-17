import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Linking} from 'react-native';

const util = require('util');

export default class Expense extends Component {
    static navigationOptions = {
        title: 'Expense',
    };

    sendEmail() {
        let url = "mailto:";
        url += "?subject=";
        url += "&body=";
        Linking.openURL(url);
    }

    editExpense() {
        var { params: { expenses, id, onEditExpense} } = this.props.navigation.state;
        if (onEditExpense && typeof onEditExpense === 'function') {
            onEditExpense(id , `${expenses}edited`);
        }

        this.props.navigation.navigate("ExpenseList", { expenses, id, onEditExpense: this.onEditExpense } );
    }

    render() {
        var { params: { expenses, id, onEditExpense} } = this.props.navigation.state;

        return(
            <View>
                <TextInput placeholder={expenses}/>

                <TouchableOpacity
                    onPress={
                        // () => this.props.navigation.navigate("ExpenseList")
                        this.props.expenses =
                        () => this.editExpense()
                    }>
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={
                        // () => this.props.navigation.navigate("ExpenseList")

                        () => this.sendEmail()
                    }>
                    <Text>mail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}