import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

type Note = {
    id: string;
    title: string;
    content: string;
};

type Props = {
    notes: Note[];
};

const NotesList = ({ notes }: Props) => {
    const renderNote = ({ item }: { item: Note }) => (
        <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Список заметок</Text>
            {notes.length === 0 ? (
                <Text style={styles.emptyText}>Нет заметок</Text>
            ) : (
                <FlatList
                    data={notes}
                    renderItem={renderNote}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },
    noteCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#dbdbdb',
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    noteContent: {
        fontSize: 14,
        color: 'black',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        marginTop: 50,
    },
});

export default NotesList;