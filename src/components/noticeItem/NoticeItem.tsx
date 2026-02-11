import classes from './NoticeItem.module.scss';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import type { Note } from '../../localStorage/initData.ts';
import { deleteNote } from '../../localStorage/deleteNote.ts';
import * as React from 'react';
import { useNotes } from '../../hooks/useNotes.ts';
import { useNavigate } from 'react-router-dom';
import { getNotes } from '../../localStorage/getNotesAndSave.ts';

const NoticeItem = ({ title, description, time, id }: Note) => {
    const navigate = useNavigate();
    const { refreshNotes } = useNotes();

    const handleDeleteNote = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        deleteNote(id);
        getNotes();
        refreshNotes();
    };

    return (
        <div className={classes.item}>
            <div
                className={classes.item__info__container}
                onClick={() => navigate(`/notes/${id}`)}
            >
                <div className={classes.item__info}>
                    <h3 className={classes.item__title}>{title}</h3>
                    <p className={classes.item__subtitle}>
                        <span className={classes.item__subtitle__time}>{time}</span>
                        {description}
                    </p>
                </div>
            </div>
            <div className={classes.delete} onClick={handleDeleteNote}>
                <div
                    className={classes.delete__icon__container}
                    title="Delete notice"
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    <img
                        className={classes.delete__icon}
                        src={deleteIcon}
                        alt="Delete notice"
                        width="32"
                        height="32"
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoticeItem;