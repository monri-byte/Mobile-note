import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const AddNote = () => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
                <Text style={styles.addButtonText}>Добавить</Text>
            </TouchableOpacity>

            {showForm && (
                <View>
                    <Text style={styles.label}>Заголовок</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={styles.label}>Текст заметки</Text>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                    />
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Подтвердить</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    addButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddNote;