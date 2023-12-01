import React, {createRef} from 'react';
import {Camera, FlashMode} from "expo-camera";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const GetPhoto = ({navigation}: any) => {
    const cam = createRef<Camera>();


    const takePhoto = () => {
        if (cam.current) {
            cam.current.takePictureAsync()
                .then(suc => {
                    // console.log(suc.uri)
                    navigation.navigate("Camera", {uri: suc.uri});
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <View>

            <Camera
                style={styles.camera}
                ratio={"16:9"}
                id={"camera"}
                flashMode={FlashMode.off}
                ref={cam}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => takePhoto()}
            >
                <Text style={{color: "white", fontSize: 20}}>Take photo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GetPhoto;

const styles = StyleSheet.create({
    camera: {
        width: 350,
        height: 622,
        marginStart: "auto",
        marginEnd: "auto"
    },
    button: {
        backgroundColor: "purple",
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 30,
        alignSelf: "center",
        borderRadius: 50
    }
})