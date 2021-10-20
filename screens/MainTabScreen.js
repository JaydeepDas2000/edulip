import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import AppliedScreen from './AppliedScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const AppliedStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#0e81ea' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Applied_List"
        component={AppliedStackScreen}
        options={{
          tabBarLabel: 'Applied List',
          tabBarIcon: ({ color }) => (
            <Icon name="md-newspaper" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="pay_History"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Pay History',
          tabBarIcon: ({ color }) => (
            <Icon name="md-wallet" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions = {{
        headerStyle: {
          backgroundColor: '#0e81ea'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold',
        }
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#0e81ea" color="#fff" onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    </HomeStack.Navigator>
);

const AppliedStackScreen = ({navigation}) => (
<AppliedStack.Navigator
  screenOptions = {{
    headerStyle: {
      backgroundColor: '#0e81ea'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight : 'bold',
    }
  }}
>
  <AppliedStack.Screen name="Applied" component={AppliedScreen} options={{
    title:"Applied List",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#0e81ea" color="#fff" onPress={() => navigation.openDrawer()}/>
    )
  }}/>
</AppliedStack.Navigator>
);