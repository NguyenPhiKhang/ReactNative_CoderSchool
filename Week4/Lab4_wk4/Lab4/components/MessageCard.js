import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const MessageCard = props => {
    const { avatar_url, first_name, last_message_date, last_message_content } = props.msg;
    //console.log(props.msg);
    return (
        <TouchableOpacity style={styles.messageCardStyle}
            onPress={() => props.onGoToConversation('Conversation', { ...props.msg })}
        >
            <TouchableOpacity onPress={() => props.onGoToProfile('Profile', { ...props })}
                style={{ justifyContent: 'center', }}>
                <Image source={{ uri: avatar_url }} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.cardTextContainer}>
                <View style={styles.cardText}>
                    <Text>{first_name}</Text>
                    <Text>{last_message_date}</Text>
                </View>
                <View>
                    <Text>{last_message_content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MessageCard;

const styles = StyleSheet.create({
    messageCardStyle: {
        shadowRadius: 5,
        shadowOpacity: 0.9,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-around",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { height: 5, width: 5 },
        elevation: 10,
    },
    image: {
        width: 75,
        height: 75,
        borderWidth: 1,
        borderRadius: 37,
        borderColor: "grey"
    },
    cardTextContainer: { flex: 1, marginHorizontal: 5 },
    cardText: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
});