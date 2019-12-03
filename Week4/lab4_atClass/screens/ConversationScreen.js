import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";

export default function ConversationScreen(props) {

  const {avatar_url, first_name, last_message_content} = props.navigation.state.params.msg;

  console.log(props);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image
        source={{uri: avatar_url}}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Text>{first_name}</Text>
      <Text>{last_message_content}</Text>
    </ScrollView>
  );
}

ConversationScreen.navigationOptions = {
  title: "Conversation"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});
