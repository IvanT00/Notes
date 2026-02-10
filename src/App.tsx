import classes from './App.module.scss'
import './styles/_globals.scss'
import NoticeList from "./components/noticeList/NoticeList.tsx";

const App = () => {
    return (
        <div className='container'>
            <div className={classes.app}>
                <h1 className={classes.app__mainTitle}>Заметки</h1>
                <NoticeList/>
            </div>
        </div>
    );
};

export default App;