import React from 'react';
import {View, Text} from "react-native";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginBottom: 10
    }
})

const Profile = ({route}: any) => {
    const {sex, newsletter, login, password, email} = route.params;

    return (
        <View style={{padding: 10}}>
            <Text style={styles.text}>Login: {login}</Text>
            <Text style={styles.text}>Hasło: {password}</Text>
            <Text style={styles.text}>E-mail: {email}</Text>
            <Text style={styles.text}>Płeć: {sex}</Text>
            <Text style={styles.text}>Newsletter: {newsletter ? "True" : "False"}</Text>
        </View>
    );
};

export default Profile;