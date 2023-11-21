import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Camera1 from "expo-camera";

const Camera = ({route, navigation}: any) => {
    const handlePress = () => {
        Camera1.requestCameraPermissionsAsync()
            .then(suc => {
                navigation.navigate("GetPhoto");
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <View style={styles.container}>

            {route.params.uri === "../assets/adaptive-icon.png" &&
                <Image
                    source={require("../assets/adaptive-icon.png")}
                    style={styles.image}
                />
            }

            {route.params.uri !== "../assets/adaptive-icon.png" &&
                <Image
                    source={route.params}
                    style={styles.image}
                />
            }


            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => handlePress()}
                >
                    <Text style={{color: "white", fontSize: 20}}>Capture</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Camera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#555"
    },
    image: {
        marginTop: 50,
        width: "75%",
        height: "55%",
        marginEnd: "auto",
        marginStart: "auto"
    },
    button: {
        backgroundColor: "purple",
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 60,
        alignSelf: "center",
        borderRadius: 50
    }
})