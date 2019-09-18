import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home      from './home/home';
import Chats  from './chats/chat';
import AdItem    from './adItem/adItem';
import Activity     from './activity/activity';
import Account   from './account/account.js';
import { createAppContainer } from 'react-navigation';

const Navigator = createMaterialBottomTabNavigator(
    {
      Home: { 
                screen: Home,
                navigationOptions:()=>({
                  tabBarIcon:{
                    
                  }
                })
            },
      Chats: {
                 screen:  Chats,
                 navigationOptions:()=>({
                 
                })
             },
      Add: { 
                screen:  AdItem,
                navigationOptions:()=>({
                  
                })
           },
      Activity: {
                 screen: Activity,
                 navigationOptions:()=>({
                  
                })
                },
      MyAccount: {
                 screen:  Account,
                 navigationOptions:()=>({
                  tabBarLabel:'Profile',
                })
                }
    },
    {
      initialRouteName: 'Home',
      shifting:false,
      barStyle: { backgroundColor: '#288cfb' },
      labeled:true,
    },
    
  );

export default createAppContainer(Navigator);
