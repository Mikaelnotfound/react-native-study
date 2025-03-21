import { View } from 'react-native';
import { AppRegistry } from 'react-native'; // Add this line

import homeStyles from './css/home'

import Ola from './telas/ola';

export default function App(){
    return (
        <View style={homeStyles.container}>
            <Ola />
        </View>
    );
}

// Add this block to register the main component
AppRegistry.registerComponent('main', () => App);