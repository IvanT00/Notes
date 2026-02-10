import { formatDate } from "./initData.ts";
import {getNotes, saveNotes} from "./getNotesAndSave.ts";


export const addData = (): string | null => {
    try {
        const notes = getNotes();
        const now = new Date();
        const newNote = {
            id: crypto.randomUUID(),
            title: 'Новая заметка',
            description: 'Нет дополнительного текста',
            time: formatDate(now),
        };
        notes.push(newNote);
        saveNotes(notes);
        return newNote.id;
    } catch (error) {
        console.error('Error adding note:', error);
        return null;
    }
};