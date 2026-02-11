import { getNotes, saveNotes } from './getNotesAndSave.ts';

export const deleteNote = (id: string): boolean => {
    try {
        const notes = getNotes();
        const initialLength = notes.length;
        const updatedNotes = notes.filter((note) => note.id !== id);

        if (updatedNotes.length < initialLength) {
            saveNotes(updatedNotes);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Delete error', error);
        return false;
    }
};