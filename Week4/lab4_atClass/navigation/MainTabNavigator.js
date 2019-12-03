import React from "react";
import { Platform, View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import MessagesScreen from "../screens/MessagesScreen";
import ContactScreen from "../screens/ContactScreen";
import GroupScreen from "../screens/GroupScreen";
import TimelineScreen from "../screens/TimelineScreen";
import MoreScreen from "../screens/MoreScreen";
import ConversationScreen from '../screens/ConversationScreen';
import { TouchableOpacity } from "react-native-gesture-handler";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const MessagesStack = createStackNavigator(
  {
    Message: MessagesScreen,
    Conversation: ConversationScreen
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="chat-bubble-outline" />
  )
};

MessagesStack.path = "";

const ContactStack = createStackNavigator(
  {
    Links: ContactScreen
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: "Contact",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="contacts"
    />
  )
};

ContactStack.path = "";

const GroupStack = createStackNavigator(
  {
    Settings: GroupScreen
  },
  config
);

GroupStack.navigationOptions = {
  tabBarLabel: "Group",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="group"
    />
  )
};

GroupStack.path = "";

const TimelineStack = createStackNavigator(
  {
    Settings: TimelineScreen
  },
  config
);

TimelineStack.navigationOptions = {
  tabBarLabel: "Timeline",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="timeline"
    />
  )
};

TimelineStack.path = "";

const MoreStack = createStackNavigator(
  {
    Settings: MoreScreen
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: "More",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="more-horiz"
    />
  )
};

MoreStack.path = "";

const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  ContactStack,
  GroupStack,
  TimelineStack,
  MoreStack
});

tabNavigator.path = "";

const Drawer = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity 
      style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', padding: 10}}
      onPress={() => {props.navigation.navigate('MoreStack')}}
    >
      <Text style={{color: 'white'}}>drawer</Text>
    </TouchableOpacity>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator,
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
