import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

type Props = {
    onAddNote: (title: string, content: string) => void;
};

const AddNote = ({ onAddNote }: Props) => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleToggleForm = () => {
        setShowForm(!showForm);
        if (!showForm) {
            setTitle('');
            setText('');
        }
    };

    const handleSubmit = () => {
        if (title.trim() && text.trim()) {
            onAddNote(title, text);
            setTitle('');
            setText('');
            setShowForm(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={handleToggleForm}>
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

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: 'white',
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