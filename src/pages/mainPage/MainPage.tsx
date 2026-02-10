import classes from './MainPage.module.scss'
import NoticeList from "../../components/noticeList/NoticeList.tsx";
import {useEffect, useRef, useState} from "react";
import {initData, type Notes} from "../../localStorage/initData.ts";

const MainPage = () => {
    const [notes, setNotes] = useState<Notes>([]);
    const isInitialized = useRef(false);
    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        try {
            const data = initData();
            setNotes(data);
        } catch (error) {
            console.log('Get notice list not found.', error);
        }
    }, [])
    return (
        <div className='container'>
            <div className={classes.app}>
                <h1 className={classes.app__mainTitle}>Заметки</h1>
                <NoticeList data={notes}/>
            </div>
        </div>
    );
};

export default MainPage;