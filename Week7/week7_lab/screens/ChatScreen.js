import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCGJDCMEhBb-YM2Xr0KpZZZ6kXu8pUowkw",
  authDomain: "week-7-rn.firebaseapp.com",
  databaseURL: "https://week-7-rn.firebaseio.com",
  projectId: "week-7-rn",
  storageBucket: "week-7-rn.appspot.com",
  messagingSenderId: "467689694551",
  appId: "1:467689694551:web:1d1cde81f467482aebca12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount = async () =>{

    // Get a reference to the database service
    //var database = firebase.database();
    //console.log(database);

    const snapshot = await firebase.database().ref('/messages').once('value');
    // .then(function (snapshot) 
    //{
      console.log(snapshot.val());
      this.setState({
        messages: snapshot.val()
      });
    //});
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    firebase.database().ref('/messages').push({
      _id: 5,
      text: "Cccvcvcvccvc",
      user: {
          _id: 5,
          name: "fskldfjklsdf",
          avatar: "https://placeimg.com/140/140/any"
      }
  });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}







// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import firebase from 'firebase';

// export default class ChatScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   componentDidMount = () => {
//     var firebaseConfig = {
//       apiKey: "AIzaSyCGJDCMEhBb-YM2Xr0KpZZZ6kXu8pUowkw",
//       authDomain: "week-7-rn.firebaseapp.com",
//       databaseURL: "https://week-7-rn.firebaseio.com",
//       projectId: "week-7-rn",
//       storageBucket: "week-7-rn.appspot.com",
//       messagingSenderId: "467689694551",
//       appId: "1:467689694551:web:1d1cde81f467482aebca12"
//     };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);

//     // Get a reference to the database service
//     var database = firebase.database();
//     //console.log(database);

//     return firebase.database().ref('/class').once('value').then(function (snapshot) {
//       console.log(snapshot.val());
//     });
//   }

//   render() {
//     const { username } = this.props.navigation.state.params;
//     //console.log(username);
//     return (
//       <View>
//         <Text> {username} </Text>
//       </View>
//     );
//   }
// }
