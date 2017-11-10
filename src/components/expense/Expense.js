import React, {Component} from 'react';
import {View, Text} from 'react-native';

const util = require('util');

export default class Expense extends Component {
    static navigationOptions = {
        title: 'Expense',
    };

    render() {
        var {params} = this.props.navigation.state;
        return(
            <Text>{params.expense}</Text>
        );
    }
}