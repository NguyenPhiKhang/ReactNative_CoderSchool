import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CHOICES = [
    {
      name: 'Rock',
      uri: require('../assets/stone.png'),
    },
    {
      name: 'Paper',
      uri: require('../assets/paper.png'),
    },
    {
      name: 'Scissors',
      uri: require('../assets/scissors.png'),
    }
  ];

function ButtonGroup(props) {
    return CHOICES.map(item => {
        return (
            <TouchableOpacity key={item.name} style={styles.button} onPress={()=>props.onPressButton(item.name)}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#5C1616',
        borderRadius: 10,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    }
});

export default ButtonGroup;