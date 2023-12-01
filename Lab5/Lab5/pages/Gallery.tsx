import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as MediaLibrary from 'expo-media-library';

const Gallery = () => {
    const [images, setImages] = useState([] as any[]);
    const [index, setIndex] = useState(0 as number);


    useEffect(() => {
        MediaLibrary.requestPermissionsAsync()
            .then(suc => {
                console.log(suc);

                MediaLibrary.getAssetsAsync({mediaType: "photo", first: 50, sortBy: "creationTime"})
                    .then(suc => {
                        console.log(suc);
                        setImages(suc.assets);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.error(err));
    }, []);

    const left = () => {
        if (index <= 0) return true;
    }

    const right = () => {
        if (index >= 49) return true;
    }

    return (
        <View style={styles.container}>

            <Image
                source={images[index]}
                style={styles.image}
            />


            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => setIndex(index - 1)}
                    disabled={left()}

                >
                    <Text style={{color: "white", fontSize: 16}}>Prev image</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => setIndex(index + 1)}
                    disabled={right()}
                >
                    <Text style={{color: "white", fontSize: 16}}>Next image</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Gallery;

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
        marginTop: 40,
        marginLeft: 20,
        borderRadius: 50
    }
})