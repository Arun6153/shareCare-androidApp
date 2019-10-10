import React, { Component } from 'react'
import { Text, View } from 'react-native'
import User from './screens/userInfo';
import Settings from './screens/settings';
import Help from './screens/help&support';
import Feedback from './screens/feedback';
import Account from './screens/account';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default class accountRoutes extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Navigation />
            </View>
        )
    }
}
const Navigator = createStackNavigator({
    Account: {
        screen: Account,
        navigationOptions: () => ({
            title: `Account`,
            header: null,
        }),
    },
    User: {
        screen: User,
        navigationOptions: () => ({
            title: `User`,
            header: null,
        }),
    },
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            title: `Settings`,
            header: null,
        })
    },
    Help: {
        screen: Help,
        navigationOptions: () => ({
            title: `Help`,
            header: null,
        }),
    },
    Feedback: {
        screen: Feedback,
        navigationOptions: () => ({
            title: `Feedback`,
            header: null,
        })
    },
},
    {
        initialRouteName: 'Account',
    });
const Navigation = createAppContainer(Navigator);