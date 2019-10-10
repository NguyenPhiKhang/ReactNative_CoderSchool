import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function PlayerCard(props) {
    return (
        <View style={styles.columnCard}>
            <Text style={{
                textDecorationLine: 'underline',
                fontSize: 20, fontWeight: 'bold', color:'#2B1716',
            }}>{props.PlayerName}</Text>
            <Image
                style={styles.imgChoice}
                source={props.choice.uri}
                resizeMode="stretch" />
            <Text style={{fontSize: 20, color: '#1B0E08',}}>{props.choice.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    columnCard: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imgChoice: {
        width: 160,
        height: 120,
    },
});

export default PlayerCard;