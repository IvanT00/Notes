import classes from './NotePage.module.scss'
import {useState} from "react";
import {formatDate} from "../../localStorage/initData.ts";
import {useNavigate} from "react-router-dom";
import {updateDate} from "../../localStorage/updateData.ts";

const NotePage = () => {

    const [title, setTitle] = useState<string>('')
    const [subtitle, setSubtitle] = useState<string>('')

    const now = new Date();
    const newData = formatDate(now);
    const navigate = useNavigate();

    const handleSave = () =>{
        const path = window.location.pathname;
        const parts = path.split('/');
        const notesIndex = parts.indexOf('notes');

        if (notesIndex !== -1 && parts.length > notesIndex + 1) {
            const id = parts[notesIndex + 1];
            updateDate(id, title, subtitle, newData);
        }else{
            return null;
        }

        navigate(`/`);
    }

    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <div className={classes.saveButton__container}>
                    <button className={classes.saveButton} onClick={handleSave}>Сохранить</button>
                </div>
                <input
                    type='text'
                    className={classes.listCont__title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={'Заголовок'}
                />
                <textarea
                    className={classes.listCont__subtitle}
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder={'Текст заметки'}
                />
            </div>
        </div>
    );
};export default NotePage;