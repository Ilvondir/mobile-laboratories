import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import Gallery from "./pages/Gallery";
import VideoPlayer from "./pages/VideoPlayer";
import MusicPlayer from "./pages/MusicPlayer";
import GetPhoto from "./pages/GetPhoto";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Camera" component={Camera}/>
                <Stack.Screen name="Gallery" component={Gallery}/>
                <Stack.Screen name="VideoPlayer" component={VideoPlayer}/>
                <Stack.Screen name="MusicPlayer" component={MusicPlayer}/>
                <Stack.Screen name="GetPhoto" component={GetPhoto}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
