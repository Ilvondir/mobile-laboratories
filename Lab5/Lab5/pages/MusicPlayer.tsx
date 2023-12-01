import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Audio } from 'expo-av';
import {Sound} from "expo-av/build/Audio/Sound";


const MusicPlayer = ({navigation}: any) => {
    const [comm, setComm] = useState("Welcome!" as string);
    const [sound, setSound] = useState(new Sound() as Sound);

    useEffect(() => {
        Audio.Sound.createAsync( require('../resources/sound.mp3'))
            .then(suc => {
                console.log(suc);
                setSound(suc.sound);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const play = () => {
        sound.playAsync()
            .then(suc => {
                console.log(suc);
                setComm("Played: sound.mp3");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const stop = () => {
        sound.unloadAsync()
            .then(suc => setComm("Stopped"))
            .catch(err => {});
    }

    const pause = () => {
        sound.pauseAsync()
            .then(suc => {
                console.log(suc);
                setComm("Paused");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 20}}>
                {comm}
            </Text>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => play()}
                >
                    <Text style={{fontSize: 16, color: "white"}}>Play</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => pause()}
                >
                    <Text style={{fontSize: 16, color: "white"}}>Pause</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => stop()}
                >
                    <Text style={{fontSize: 16, color: "white"}}>Stop</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default MusicPlayer;

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