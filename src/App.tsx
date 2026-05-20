import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Заметки</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f5f5',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 60,
    },
});

export default App;