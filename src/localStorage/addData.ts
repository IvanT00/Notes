import {formatDate, type Note, type Notes} from "./initData.ts";

export const addData = (): Note | null => {
    try {
        const now = new Date();
        const newNote: Note = {
            id: crypto.randomUUID(),
            title: 'Новая заметка',
            description: 'Нет дополнительного текста',
            time: formatDate(now),
        };

        const stringNotes = localStorage.getItem("notes");
        let notes: Notes = [];

        if (stringNotes) {
            try {
                notes = JSON.parse(stringNotes);
                if (!Array.isArray(notes)) {
                    notes = [];
                }
            } catch {
                notes = [];
            }
        }

        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        return newNote;
    } catch (error) {
        console.error('Error adding note:', error);
        return null;
    }
};