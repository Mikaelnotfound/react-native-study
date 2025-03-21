import React from 'react';
import { Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import inputStyles from '../css/input';

export default function Input() {
    const [text, onChangeText] = React.useState("");

    let nome = text;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={inputStyles.container}>
                <Text style={inputStyles.p}>Digite seu nome:</Text>
                <TextInput
                    style={inputStyles.input}
                    onChangeText={onChangeText}
                    placeholder='Digite seu nome'
                    value={text} />
                <Text style={inputStyles.p}> Olá {nome}, prazer em conhecer!</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}