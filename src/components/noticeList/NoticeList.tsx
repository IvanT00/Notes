import classes from './NoticeList.module.scss'
import NoticeItem from "../noticeItem/NoticeItem.tsx";
import Panel from "../panel/Panel.tsx";
import {useNavigate} from "react-router-dom";
import type {Note, Notes} from "../../localStorage/initData.ts";

interface NoticeListProps {
    data?: Notes;
}

const NoticeList = ({data}: NoticeListProps) => {
    const navigate = useNavigate();

    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <Panel/>
                { data && data.map((note:Note) => (
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