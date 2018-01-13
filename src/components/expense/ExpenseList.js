import React, {Component} from 'react';
import {View, ListView, Text, TouchableHighlight, ScrollView, Button, AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import ScrollViewItem from './ScrollViewItem';

const util = require('util');

export default class ExpenseList extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        // console.warn(this.navigation.state.id);

        return {
            title: 'Expenses screen',
            headerRight: <Button title="Sign out" onPress={() => params.signOut()}/>
        };
    };

    state = {
        dataLoaded: false
    };

    signOut = async () => {
        try {
            await AsyncStorage.setItem('@Username:key', 'none');
        } catch (error) {
            // Error saving data
        }

        const navigateLoading = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Splash'})
            ]
        });
        this.props.navigation.dispatch(navigateLoading);
    };

    async componentWillMount() {
        this.setState({dataLoaded: false});

        this.props.navigation.setParams({signOut: this.signOut});

        return fetch('https://ovesenterprise.ro/para/expenses.php?username=' + global.username)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({homeData: responseJson});
                this.setState({dataLoaded: true});
            })
            .catch(error => {
                console.error(error);
            });
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ScrollView style={{}}>
                {
                    this.state.dataLoaded ? (
                        <Text style={{
                            paddingLeft: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            fontSize: 35,
                            textAlign: 'left'
                        }}>Expenses</Text>
                    ) : null
                }
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 0}}>
                    {
                        this.state.dataLoaded ?
                            this.state.homeData.expenses.map((item) =>
                                <ScrollViewItem key={item.id} navigation={this.props.navigation} name={item.name} price={item.price} id={item.id} description={item.description} userId={item.userId}/>
                            ) : null

                    }
                </View>
            </ScrollView>
        );
    }
}

