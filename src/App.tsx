import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import AddNote from './AddNote';
import NotesList from './NotesList';

type Note = {
    id: string;
    title: string;
    content: string;
};

const App = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    const addNote = (title: string, content: string) => {
        const newNote: Note = {
            id: Date.now().toString(),
            title,
            content,
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Заметки</Text>
            <AddNote onAddNote={addNote} />
            <NotesList notes={notes} onDeleteNote={deleteNote} />
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