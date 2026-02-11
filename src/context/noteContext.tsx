import { createContext } from 'react';
import type { Notes } from '../localStorage/initData';

export interface NotesContextType {
    notes: Notes;
    refreshNotes: () => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined);