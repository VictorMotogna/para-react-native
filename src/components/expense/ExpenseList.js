import React, {Component} from 'react';
import {View, ListView, Text, TouchableHighlight, ScrollView} from 'react-native';

const util = require('util');

var expenseArray = ["Food", "Drinks", "Gift", "Jacket"];

export default class ExpenseList extends Component {
    static navigationOptions = {
        title: 'Expenses screen',
    };

    constructor(props) {
        super(props);
        expenseArray = ["Food", "Drinks", "Gift", "Jacket"];
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
        this.state = {dataSource: dataSource.cloneWithRows(expenseArray)};
    }

    openPage(expenses, id) {
        this.props.navigation.navigate("Expense", { expenses, id, onEditExpense: this.onEditExpense } );
    }

    onEditExpense = (id, newExpense) => {
        console.log(' onEdit', id, newExpense, this.state.dataSource);
        let newDs = [];
        newDs = this.state.dataSource._dataBlob.s1.slice();
        newDs[id].Selection = newExpense;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newDs)
        })
    };

    render() {
        var {navigate} = this.props.navigation;
        const array = expenseArray.map( (item, index) => {
            const desc = expenseArray[index] ? <Text>{expenseArray[index]}</Text>:<View/>;
            return(
                <View key={index}>
                    <View>
                        <TouchableHighlight
                            underlayColor='#ddd'
                            style={{height:44}}
                            onPress={this.openPage.bind(this, expenseArray[index], index)}>
                            <View>
                                <Text style={{fontSize:20, color:'#000'}} numberOfLines={1}>{expenseArray[index]}</Text>
                                <View style={{height:1, backgroundColor:'#000', opacity: 0.1}}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        });
        return(
            <ScrollView>
                {array}
            </ScrollView>
        )
    }
}

