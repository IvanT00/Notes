import classes from './MainPage.module.scss';
import NoticeList from '../../components/noticeList/NoticeList.tsx';

const MainPage = () => {
    return (
        <div className="container">
            <div className={classes.app}>
                <h1 className={classes.app__mainTitle}>Заметки</h1>
                <NoticeList />
            </div>
        </div>
    );
};

export default MainPage;