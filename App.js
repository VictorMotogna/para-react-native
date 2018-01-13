import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/Splash';
import Login from './src/components/Login/Login';
import AddExpense from './src/components/expense/AddExpense';
import ExpenseList from './src/components/expense/ExpenseList';
import Expense from './src/components/expense/Expense';
import { StackNavigator, NavigationActions } from 'react-navigation';
import './src/components/data_global/Global';

const Navigation = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    AddExpense: {screen: AddExpense},
    ExpenseList: {screen: ExpenseList},
    Expense: {screen: Expense}
});

export default Navigation;