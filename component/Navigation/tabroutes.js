import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Home from './home/home';
import Chats from './chats/chat';
import AdItem from './adItem/adItem';
import Activity from './activity/activity';
import Account from './account/account.js';
import { createAppContainer } from 'react-navigation';
import React from 'react';

const Navigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          if (focused) { return <AntDesign name={'home'} size={21} color={'white'} /> }
          else {
            return <AntDesign name={'home'} size={21} color={'#50a0fb'} />
          }
        }
      }),
    },
    Chats: {
      screen: Chats,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          if (focused)
            return <Ionicons name="ios-chatbubbles" size={21} color={'white'} />
          else {
            return <Ionicons name={'ios-chatbubbles'} size={21} color={'#50a0fb'} />
          }
        },
      }),
    },
    Add: {
      screen: AdItem,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          if (focused)
            return <MaterialIcons name="add-circle" size={21} color={'white'} />
          else
            return <MaterialIcons name="add-circle" size={21} color={'#50a0fb'} />
        },
      })
    },
    Activity: {
      screen: Activity,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          if (focused)
            return <MaterialIcons name="local-activity" size={21} color={'white'} />
          else
            return <MaterialIcons name="local-activity" size={21} color={'#50a0fb'} />
        },
      })
    },
    MyAccount: {
      screen: Account,
      navigationOptions: () => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => {
          if (focused)
            return <AntDesign name="aliwangwang" size={21} color={'white'} />
          else
            return <AntDesign name="aliwangwang" size={21} color={'#50a0fb'} />
        },
      })
    },
  }, {
  initialRouteName: 'Home',
  shifting: false,
  barStyle: { backgroundColor: '#288cfb' },
  labeled: true,
  defaultNavigationOptions: () => ({
    tabBarIcon: () => {
      return <AntDesign name="home" size={21} color={'white'} />
    }
  })
});
export default createAppContainer(Navigator);
