import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
    }
  }

  onChangeText = text => {
    this.setState({
      inputName: text,
    })
  }

  onPressGotoChat = ()=>{
    this.props.navigation.navigate("Chat", {username: this.state.inputName}); 
  }

  render() {
    const { inputName } = this.state;
    return (
      <View style={styles.container}>
        <Text>Please type your name...</Text>
        <TextInput
          style = {styles.input}
          value={inputName}
          onChangeText={this.onChangeText} />
        <Button title="Go to chat" color='red' onPress={this.onPressGotoChat} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'grey',
    width: 300,
    height: 30,
  },
});
