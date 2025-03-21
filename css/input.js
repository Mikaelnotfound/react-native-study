import { StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
        gap: 10
    },
    input: {
        padding: 10,
        width: 250,
        backgroundColor: '#f4f4',
        borderRadius: 10,
        borderWidth: 1
    },
    p: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default inputStyles;