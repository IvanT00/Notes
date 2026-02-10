import {getNotes, saveNotes} from "./getNotesAndSave.ts";

export interface Note {
    id: string;
    title: string;
    description: string;
    time: string;
}

export type Notes = Note[];

const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const time = formatTime(date);
    return `${time} ${day}/${month}/${year}`;
};

const createInitialNote = (): Note => {
    const now = new Date();
    return {
        id: crypto.randomUUID(),
        title: "Новая заметка",
        description: "Нет дополнительного текста",
        time: formatDate(now)
    };
};

export const initData = (): Notes => {
    try {
        const notes = getNotes();
        if (notes.length === 0) {
            const initialNote = createInitialNote();
            const notesToSave = [initialNote];
            saveNotes(notesToSave);
            return notesToSave;
        }
        return notes;
    } catch (error) {
        console.error('Initialization failed:', error);
        return [createInitialNote()];
    }
};