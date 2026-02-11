import { useState, type ReactNode } from 'react';
import { initData, type Notes } from '../localStorage/initData';
import { getNotes } from '../localStorage/getNotesAndSave';
import { NotesContext, type NotesContextType } from './noteContext.tsx';

export const NotesProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState<Notes>(() => initData());

    const refreshNotes = () => {
        const updatedNotes = getNotes();
        setNotes(updatedNotes);
    };

    const value: NotesContextType = { notes, refreshNotes };

    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    );
};