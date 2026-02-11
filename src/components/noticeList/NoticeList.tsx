import classes from './NoticeList.module.scss';
import NoticeItem from '../noticeItem/NoticeItem.tsx';
import Panel from '../panel/Panel.tsx';
import type { Note } from '../../localStorage/initData.ts';
import { useNotes } from '../../hooks/useNotes.ts';
import { useState, useMemo } from 'react';

const NoticeList = () => {
    const { notes, refreshNotes } = useNotes();
    const [searchQuery, setSearchQuery] = useState('');

    const notesAreFull = notes.length >= 50;

    const filteredNotes = useMemo(() => {
        if (!searchQuery.trim()) {
            return notes;
        }

        const query = searchQuery.toLowerCase();
        return notes.filter((note: Note) =>
            note.title.toLowerCase().includes(query)
        );
    }, [notes, searchQuery]);

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <Panel
                    onSearchChange={handleSearchChange}
                    canAddNotes={!notesAreFull}
                    onNoteAdded={refreshNotes}
                />
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note: Note) => (
                        <div key={note.id} style={{ cursor: 'pointer' }}>
                            <NoticeItem
                                id={note.id}
                                title={note.title}
                                description={note.description}
                                time={note.time}
                            />
                        </div>
                    ))
                ) : (
                    <div className={classes.noResults}>
                        {searchQuery.trim() ? (
                            <span style={{ color: 'black' }}>
                По запросу "{searchQuery}" ничего не найдено
              </span>
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticeList;
