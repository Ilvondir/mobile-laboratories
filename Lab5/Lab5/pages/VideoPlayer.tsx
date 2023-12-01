import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ResizeMode, Video} from "expo-av";

const VideoPlayer = () => {
    const handle = useRef<Video>(null);

    useEffect(() => {

        if (handle.current !== null)
            handle.current.playAsync()
                .then(suc => {
                    console.log(suc);
                })
                .catch(err => {
                    console.error(err)
                })
    }, []);


    return (
        <View style={styles.container}>
            <Video
                ref={handle}
                source={require("../resources/video.mp4")}
                style={{width: "100%", height: "90%", backgroundColor: "black"}}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
            />
        </View>
    );
};

export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 150
    },
    button: {
        backgroundColor: "purple",
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 50
    }
});