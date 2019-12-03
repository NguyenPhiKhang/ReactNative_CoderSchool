import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import messages from '../messages.json'
import MessageCard from '../components/MessageCard'

const onGoToConversation=()=>{}

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          messages.map(msg => {
            return (
              <View key={msg.id} style={{margin: 5,}}>
                <MessageCard
                  onGoToConversation={props.navigation.navigate}
                  msg={msg} />
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}

MessagesScreen.navigationOptions = props=>{
  return{
    title: "Messages",
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={props.navigation.openDrawer}>
          <Image
            style={{ height: 30, width: 30, marginLeft: 20 }}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});