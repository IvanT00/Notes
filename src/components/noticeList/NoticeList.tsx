import classes from './NoticeList.module.scss'
import NoticeItem from "../noticeItem/NoticeItem.tsx";
import Panel from "../panel/Panel.tsx";
import {useNavigate} from "react-router-dom";
import type {Note, Notes} from "../../localStorage/initData.ts";
import {useState} from "react";
import {initData} from "../../localStorage/initData.ts";
import {getNotes} from "../../localStorage/getNotesAndSave.ts";

const NoticeList = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState<Notes>(() => {
        return initData();
    });

    const refreshNotes = () => {
        const updatedNotes = getNotes();
        setNotes(updatedNotes);
    };

    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <Panel onNoteAdded={refreshNotes}/>
                { notes && notes.map((note:Note) => (
                    <div
                        key={note.id}
                        onClick={() => navigate(`/notes/${note.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <NoticeItem
                            id={note.id}
                            title={note.title}
                            description={note.description}
                            time={note.time}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeList;