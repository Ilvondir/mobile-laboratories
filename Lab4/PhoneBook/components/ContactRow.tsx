import React from 'react';
import {Linking, Platform, Pressable, Text, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    record: {
        marginBottom: 20
    },
    title: {
        fontSize: 25
    },
    number: {
        fontSize: 15,
        opacity: 0.6
    },
    button: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#CCC",
        alignSelf: "flex-end",
        borderRadius: 5,
        position: "absolute",
        marginTop: 12
    },
    sms: {
        right: 70
    },
    text: {
        fontSize: 17
    }
})

const ContactRow = (props: { name: string, number?: string }) => {

    const call = (number?: string) => {
        if (Platform.OS === "android") Linking.openURL("tel: " + number);
        else Linking.openURL("telprompt: " + number);
    }

    const sms = (number?: string) => {
        if (Platform.OS === "android") Linking.openURL(`sms: ${number}?body=Podaj wiadomość.`);
        else Linking.openURL(`sms: ${number}&body=Podaj wiadomość.`);
    }

    const name = (name: string) => {
        if (name.length > 16) return name.slice(0, 13) + "..."
        else return name;
    }

    return (
        <View style={styles.record}>
            <Text style={styles.title}>{name(props.name)}</Text>
            <Text style={styles.number}>{props.number}</Text>
            <Pressable
                onPress={() => sms(props.number)}
                style={[styles.button, styles.sms]}>
                <Text style={styles.text}>SMS</Text>
            </Pressable>
            <Pressable
                onPress={() => call(props.number)}
                style={styles.button}>
                <Text style={styles.text}>CALL</Text>
            </Pressable>
        </View>
    );
};

export default ContactRow;