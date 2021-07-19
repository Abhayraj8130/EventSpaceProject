import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import TrackProfileScreen from './TrackProfileScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HomeStack.Navigator>
  );
  
  
const DetailsStack = createStackNavigator();

  const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
          title:'Profile Detail',
          headerTransparent: true,
          headerLeft: () => (
            <Icon.Button name="arrow-back" size={25}  color='#000000' backgroundColor='transparent' onPress={() => navigation.navigate("Home")}></Icon.Button>
          )
          }} />
  </DetailsStack.Navigator>
  );
    

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
          fontWeight: 'bold',
          
          }
      }}>
          <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          title:'Profile',
          headerTransparent: true,
          headerLeft: () => (
              <Icon.Button name="arrow-back" size={25}  color='#000000' backgroundColor='transparent' onPress={() => navigation.navigate("Home")}></Icon.Button>
          )
          }} />
  </ProfileStack.Navigator>
  );
  
  const TrackProfileStack = createStackNavigator();

const TrackProfileStackScreen = ({navigation}) => (
  <TrackProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#ffff',
          },
          
          headerTintColor: '#000000',
          headerTitleStyle: {
          fontWeight: '400',
          
          }
      }}>
          <TrackProfileStack.Screen name="TrackProfile" component={TrackProfileScreen} options={{
          title:'Track Profile',
          
          headerShown:false,
          headerLeft: () => (
              <Icon.Button name="arrow-back" size={25}  color='#000000' backgroundColor='transparent' onPress={() => navigation.navigate("Home")}></Icon.Button>
          )
          }} />
  </TrackProfileStack.Navigator>
  );
  
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Profile Detail',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-check-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Track Profile"
        component={TrackProfileStackScreen}
        options={{
          tabBarLabel: 'Track Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

