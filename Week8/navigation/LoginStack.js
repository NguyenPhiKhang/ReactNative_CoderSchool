import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
);

export default LoginStack;