import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

type Note = {
    id: string;
    title: string;
    content: string;
};

type Props = {
    notes: Note[];
    onDeleteNote: (id: string) => void;
};

const NotesList = ({ notes, onDeleteNote }: Props) => {
    const renderNote = ({ item }: { item: Note }) => (
        <View style={styles.noteCard}>
            <View style={styles.noteContent}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteText}>{item.content}</Text>
            </View>
            <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => onDeleteNote(item.id)}
            >
                <Text style={styles.deleteButtonText}>Удалить</Text>
            </TouchableOpacity>
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
        padding: 10,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noteContent: {
        flex: 1,
        marginRight: 10,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    noteText: {
        fontSize: 14,
        color: 'black',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        marginTop: 50,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default NotesList;