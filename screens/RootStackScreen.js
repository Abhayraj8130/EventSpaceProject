import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerTransparent: true, title:'Space Event'}}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{headerTransparent: true, title:'Login'}}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerTransparent: true, title:'Sign Up'}}/>
    </RootStack.Navigator>
);

export default RootStackScreen;