import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddNote from './AddNote';
import NotesList from './NotesList';

type Note = {
    id: string;
    title: string;
    content: string;
};

const App = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        loadNotes();
    }, []);

    useEffect(() => {
        saveNotes();
    }, [notes]);

    const loadNotes = async () => {
        const savedNotes = await AsyncStorage.getItem('notes');
        if (savedNotes !== null) {
            setNotes(JSON.parse(savedNotes));
        }
    };

    const saveNotes = async () => {
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
    };

    const addNote = (title: string, content: string) => {
        const newNote: Note = {
            id: Date.now().toString(),
            title,
            content,
        };
        const newNotes: Note[] = [newNote];
        notes.forEach(function(note: Note) {
            newNotes.push(note);
        });
        setNotes(newNotes);
    };

    const deleteNote = (id: string) => {
        const filteredNotes: Note[] = [];
        notes.forEach(function(note: Note) {
            if (note.id !== id) {
                filteredNotes.push(note);
            }
        });
        setNotes(filteredNotes);
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