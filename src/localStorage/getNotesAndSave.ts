import type {Notes} from "./initData.ts";

export const getNotes = (): Notes => {
    try {
        const raw = localStorage.getItem('notes');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

export const saveNotes = (notes: Notes): void => {
    localStorage.setItem('notes', JSON.stringify(notes));
};