import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginStack from './LoginStack';
import LoadingScreen from '../screens/LoadingScreen';

export default createAppContainer(
  createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginStack: LoginStack,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
