import React from 'react';
import { Platform, Text, View} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MessagesScreen from '../screens/MessagesScreen';
import ContactsScreen from '../screens/ContactsScreen';
import GroupsScreen from '../screens/GroupsScreen';
import TimelineScreen from '../screens/TimelineScreen';
import MoreScreen from '../screens/MoreScreen';
import ConversationScreen from '../screens/ConversationScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
    Conversation: ConversationScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
  ),
};

MessagesStack.path = '';

const ContactsStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  config
);

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contact'} />
  ),
};

ContactsStack.path = '';

const GroupsStack = createStackNavigator(
  {
    Groups: GroupsScreen,
  },
  config
);

GroupsStack.navigationOptions = {
  tabBarLabel: 'Groups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

GroupsStack.path = '';

const TimelineStack = createStackNavigator({
  Timeline: TimelineScreen,
},
  config
);

TimelineStack.navigationOptions = {
  tabBarLabel: 'TimeLine',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
  ),
};

TimelineStack.path = '';

const MoreStack = createStackNavigator({
  More: MoreScreen,
},
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  ContactsStack,
  GroupsStack,
  TimelineStack,
  MoreStack,
});

tabNavigator.path = '';

const Drawer = () => (
  <View style={{flex: 1, justifyContent:'center', alignItems: 'center',}}>
    <Text>Drawer Item 1</Text>
    <Text>Drawer Item 2</Text>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;