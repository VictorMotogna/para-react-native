import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/Splash';
import Login from './src/components/Login/Login';
import AddExpense from './src/components/expense/AddExpense'
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    AddExpense: {screen: AddExpense}
});

export default Navigation;