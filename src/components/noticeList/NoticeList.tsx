import classes from './NoticeList.module.scss'
import NoticeItem from "../noticeItem/NoticeItem.tsx";

const NoticeList = () => {
    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <div className={classes.add__container}>
                    <img width={100} height={100} src="src/assets/icons/addIcon.svg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default NoticeList;