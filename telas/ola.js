import { View, Text } from 'react-native';
import olaStyles from '../css/ola';

import Input from './Input';

export default function Ola(){
    return (
        <View style={olaStyles.container}>
            <Text style={olaStyles.h1}>Olá família!</Text>
            <Text style={olaStyles.p}>Meu Nome é Mikael</Text>
            <Input />
        </View>
    );
}