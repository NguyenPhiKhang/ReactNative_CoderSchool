import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount= async() =>{
      setTimeout(async()=>{
        const token = await AsyncStorage.getItem('@token');
        console.log(token);
        if(token!=null)
        {
            this.props.navigation.navigate('Main');
        }
        else this.props.navigation.navigate('LoginStack');
      }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator size="large" color='red'  />
      </View>
    );
  }
}
