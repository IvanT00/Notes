import type { Note, Notes } from "./initData.ts";

export const updateNote = (
    id: string,
    title: string,
    description: string,
    newDate: string
): boolean => {
    try {
        const notesString = localStorage.getItem("notes");

        if (!notesString) {
            console.error('No notes found in localStorage');
            return false;
        }

        const notes: Notes = JSON.parse(notesString);
        const noteIndex = notes.findIndex((note: Note) => note.id === id);

        if (noteIndex === -1) {
            console.error(`Note with id ${id} not found`);
            return false;
        }

        const existingNote = notes[noteIndex];
        let isChanged = false;

        if (title !== existingNote.title) {
            existingNote.title = title;
            isChanged = true;
        }

        if (description !== existingNote.description) {
            existingNote.description = description;
            isChanged = true;
        }

        if (isChanged) {
            existingNote.time = newDate;
        }

        notes[noteIndex] = existingNote;
        localStorage.setItem('notes', JSON.stringify(notes));

        return true;
    } catch (error) {
        console.error('Error updating note:', error);
        return false;
    }
};