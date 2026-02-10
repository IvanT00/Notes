import type { Note } from "./initData.ts";
import {getNotes, saveNotes} from "./getNotesAndSave.ts";

export const updateDate = (
    id: string,
    title: string,
    subtitle: string,
    newDate: string
): boolean => {
    try {
        const notes = getNotes();
        const noteIndex = notes.findIndex((note: Note) => note.id === id);

        if (noteIndex === -1) {
            console.error(`Note with id ${id} not found`);
            return false;
        }

        const existingNote = notes[noteIndex];
        const updatedNote = { ...existingNote };
        let isChanged = false;

        if (title.trim() !== updatedNote.title.trim()) {
            updatedNote.title = title.trim();
            isChanged = true;
        }

        if (subtitle.trim() !== updatedNote.description.trim()) {
            updatedNote.description = subtitle.trim();
            isChanged = true;
        }

        if (isChanged) {
            updatedNote.time = newDate;
            notes[noteIndex] = updatedNote;
            saveNotes(notes);
            return true;
        }

        return false;
    } catch (error) {
        console.error('Error updating note:', error);
        return false;
    }
};