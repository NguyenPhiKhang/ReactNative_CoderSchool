import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert, AsyncStorage } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as Facebook from 'expo-facebook';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    onPressLogin = async () => {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('1002868356715145', {
                permissions: ['public_profile', 'email'],
            });
            // console.log(type);
            console.log(token);
            if (type === 'success') {
                AsyncStorage.setItem('@token', token);
                console.log(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);

                const json = await response.json();
                console.log('USER_INFO',json);
                this.props.navigation.navigate('Main');
            }
        }
        catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    logIn = async () => {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('1002868356715145', {
                permissions: ['public_profile'],
            });
            console.log(type);
            console.log(token);
            //   if (type === 'success') {
            //     // Get the user's name using Facebook's Graph API
            //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            //     Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            //   } else {
            //     // type === 'cancel'
            //   }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressLogin}>
                    <Text>Login Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    title: 'Logins',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
