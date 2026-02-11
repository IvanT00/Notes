import classes from './NotePage.module.scss';
import { useState, useEffect } from 'react';
import { formatDate } from '../../localStorage/initData.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDate } from '../../localStorage/updateData.ts';
import { useNotes } from '../../hooks/useNotes.ts';
import { getNotes } from '../../localStorage/getNotesAndSave.ts';
import type { Note } from '../../localStorage/initData.ts';
import * as React from 'react';

const NotePage = () => {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const { refreshNotes } = useNotes();
    const [titleIsFull, setTitleIsFull] = useState<boolean>(false);
    const [subtitleIsFull, setSubTitleIsFull] = useState<boolean>(false);

    const now = new Date();
    const newData = formatDate(now);
    const navigate = useNavigate();

    const titleLimit = 100;
    const subtitleLimit = 5000;

    useEffect(() => {
        if (id) {
            const notes = getNotes();
            const note = notes.find((note: Note) => note.id === id);

            if (note) {
                setTitle(note.title);
                setSubtitle(note.description);
            }
        }
    }, [id]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= titleLimit) {
            setTitle(value);
        } else {
            setTitleIsFull(true);
        }
    };

    const handleSubTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= subtitleLimit) {
            setSubtitle(value);
        } else {
            setSubTitleIsFull(true);
        }
    };

    const handleSave = () => {
        if (id) {
            updateDate(id, title, subtitle, newData);
            refreshNotes();
            navigate('/');
        }
    };

    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <div className={classes.saveButton__container}>
                    {titleIsFull && (
                        <span style={{ color: 'red', marginLeft: '16px' }}>
              Превышен лимит символов для заголовка!
            </span>
                    )}
                    {subtitleIsFull && (
                        <span style={{ color: 'red', marginLeft: '16px' }}>
              Превышен лимит символов для основного текста!
            </span>
                    )}
                    {!subtitleIsFull && !titleIsFull ? (
                        <button className={classes.saveButton} onClick={handleSave}>
                            Сохранить
                        </button>
                    ) : null}
                </div>
                <input
                    type="text"
                    className={classes.listCont__title}
                    value={title}
                    onChange={handleTitleChange}
                    placeholder={'Заголовок'}
                />
                <textarea
                    className={classes.listCont__subtitle}
                    value={subtitle}
                    onChange={handleSubTitleChange}
                    placeholder={'Текст заметки'}
                />
            </div>
        </div>
    );
};

export default NotePage;