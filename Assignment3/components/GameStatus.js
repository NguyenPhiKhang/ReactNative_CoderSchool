import React from 'react';
import { View, Text } from 'react-native';

function GameStatus(props) {
    switch (props.result) {
        case 'Victory!':
            return <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>{props.result}</Text>
        case 'Defeat!':
            return <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>{props.result}</Text>
        default:
            return <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#5C1616' }}>{props.result}</Text>
    }
}

export default GameStatus;