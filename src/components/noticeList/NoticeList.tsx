import classes from './NoticeList.module.scss'
import NoticeItem from "../noticeItem/NoticeItem.tsx";
import Panel from "../panel/Panel.tsx";


const NoticeList = () => {
    return (
        <div className={classes.list}>
            <div className={classes.listCont}>
                <Panel/>
                <NoticeItem/>
            </div>
        </div>
    );
};

export default NoticeList;