import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

const onLogout = async (navigate) => {
  await AsyncStorage.removeItem("@token");
  console.log("logout");
  await setTimeout(() => {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size='large' color='red'/>
      </View>
    )
  }, 2000);
  navigate('LoginStack');
}

export default function HomeScreen(props) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { onLogout(props.navigation.navigate) }} style={styles.helpLink}>
        <Text style={{ color: 'blue', fontSize: 20 }}>
          Logout
            </Text>
            {/* <Image source/> */}
      </TouchableOpacity>
    </View>
  );
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
});
