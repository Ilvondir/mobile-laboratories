import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}: any) => {
    return (
        <View style={styles.container}>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Camera", {uri: "../assets/adaptive-icon.png"})}
                >
                    <Text style={{fontSize: 20}}>Camera</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Gallery")}
                >
                    <Text style={{fontSize: 20}}>Gallery</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("MusicPlayer")}
                >
                    <Text style={{fontSize: 20}}>Music player</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("VideoPlayer")}
                >
                    <Text style={{fontSize: 20}}>Video player</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#BBB",
        paddingHorizontal: 30,
        paddingVertical: 10,
        margin: 10
    }
});
