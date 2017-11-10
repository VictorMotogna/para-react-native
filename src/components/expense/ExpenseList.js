import React, {Component} from 'react';
import {View, ListView, Text, TouchableHighlight} from 'react-native';

const util = require('util');

var expenseArray = ["Food", "Drinks", "Gift", "Jacket"];

export default class ExpenseList extends Component {
    static navigationOptions = {
        title: 'Add expense screen',
    };

    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
        this.state = {dataSource: dataSource.cloneWithRows(expenseArray)}
    }

    renderRow(rowData, sectionID, rowID) {
        var {navigate} = this.props.navigation;
        return(
            <TouchableHighlight
                underlayColor='#ddd'
                style={{height:44}}
                onPress={
                    () => navigate("Expense", {expense: rowData})
                }>
                <View>
                    <Text style={{fontSize:20, color:'#000'}} numberOfLines={1}>{rowData}</Text>
                    <View style={{height:1, backgroundColor:'#000', opacity: 0.1}}/>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        var {navigate} = this.props.navigation;

        return(
            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} style={{marginTop: 16}}>
            </ListView>
        );
    }
}

