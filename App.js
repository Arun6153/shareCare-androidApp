import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tabs from './src/component/Navigation/tabroutes';
import Login from './src/component/Login and Sign Up/login';
import SignUp from './src/component/Login and Sign Up/signUp';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        
        <StatusBar barStyle={'light-content'} translucent={true} />
        <Navigation />
      </View>
    )
  }
}
const Navigator = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: () => ({
      title: `Login`,
      header: null,
    }),
  },
  signUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: `Sign Up`,
      header: null,
    }),
  },
  tabs: {
    screen: Tabs,
    navigationOptions: () => ({
      header: null,
    }),
  }
},
  {
    initialRouteName: 'login',
  });
const Navigation = createAppContainer(Navigator);